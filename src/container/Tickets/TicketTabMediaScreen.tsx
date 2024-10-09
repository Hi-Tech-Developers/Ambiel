// TODOS:
// Left wipe for deleting items
// Preview Icon
// Format Date (external function from include file for all screens )

import { environment } from "../../core/config/environment";
import axios, { AxiosError } from "axios";
import RNFS from "react-native-fs";
import FileViewer from "react-native-file-viewer";
import {
  FileDownloadResponse,
  FilesResponse,
  LoginResponse,
} from "../../core/types/apiResponses/loginResponse";
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from "react-native-document-picker";
import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectIdentity } from "../../core/store/selectors/identity.selectors";
import { Colors } from "../../styles/colors";
import ContainerLayout from "../../components/layout/ContainerLayout";

const TicketTabMediaScreen = (props: any) => {
  const identity = useSelector(selectIdentity);
  const { ticket } = props.route.params;
  const [files, setFiles] = useState<any[]>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    getFiles(ticket.id);
  }, []);

  const openCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const image = result.assets[0].uri;
        var filename = image.split("/").pop();

        // Infer the type of the image
        var match = /\.(\w+)$/.exec(filename ?? "");
        var type = match
          ? `${result.assets[0].type}/${match[1]}`
          : `${result.assets[0].type}`;

        let imageObj = {
          type: type,
          uri: image,
          name: filename,
        };

        uploadFile(imageObj, ticket.id);
      }
    } catch (error) {
      console.log("Error capturing image:", error);
    }
  };

  const openGallery = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const image = result.assets[0].uri;
        var filename = image.split("/").pop();

        // Infer the type of the image
        var match = /\.(\w+)$/.exec(filename ?? "");
        var type = match
          ? `${result.assets[0].type}/${match[1]}`
          : `${result.assets[0].type}`;

        let imageObj = {
          type: type,
          uri: image,
          name: filename,
        };

        uploadFile(imageObj, ticket.id);
      }
    } catch (error) {
      console.log("Error selecting image:", error);
    }
  };

  const openFilePicker = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
      });

      if (!result.copyError) {
        const file = result.uri;
        var filename = result.name;

        // Infer the type of the image
        var type = `${result.type}`;

        let fileObj = {
          type: type,
          uri: file,
          name: filename,
        };
        // console.log(filename);
        uploadFile(fileObj, ticket.id);
      }
    } catch (error) {
      console.log("Error selecting image:", error);
    }
  };

  async function uploadFile(image: Object, ticket: Number) {
    const endpoint = `${environment.api.baseUrl}/ticket/files`;

    var formData = new FormData();
    formData.append("id", ticket);
    formData.append("file", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: identity?.access_token,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.post<FilesResponse>(
        endpoint,
        formData,
        config
      );
      setIsLoading(false);
      getFiles(ticket);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      const error = e as AxiosError;

      if (error.response) {
        console.log(error.response);
      }
    }
  }

  async function getFiles(ticket: Number) {
    const endpoint = `${environment.api.baseUrl}/ticket/files?id=${ticket}`;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: identity?.access_token,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.get<FilesResponse>(endpoint, config);
      setIsLoading(false);
      setFiles(response.data.files);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        console.log(error.response);
      }
    }
  }

  async function downloadFile(
    ticket: Number,
    fileId: string,
    extension: string
  ) {
    const endpoint = `${environment.api.baseUrl}/ticket/files/download`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: identity?.access_token,
      },
    };
    const data = {
      id: ticket,
      file: fileId,
    };
    // console.log(data);

    try {
      setIsLoading(true);
      const response = await axios.post<FileDownloadResponse>(
        endpoint,
        data,
        config
      );

      const localFile = `${RNFS.DocumentDirectoryPath}/${fileId}.${extension}`;

      const options = {
        fromUrl: response.data.url,
        toFile: localFile,
      };
      RNFS.downloadFile(options)
        .promise.then(() => {})
        .then(() => {
          setIsLoading(false);
          FileViewer.open(localFile);
        })
        .catch((error) => {
          setIsLoading(false);
          // error
        });

      console.log(response.data);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        console.log(error.response);
      }
    }
  }
  return (
    <ContainerLayout>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {isLoading && <ActivityIndicator size={"large"}></ActivityIndicator>}
        <View
          style={{
            flexDirection: "row",
            padding: 6,
            borderBottomWidth: 1,
            borderBottomColor: Colors.grey,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.yellow,
          }}
        >
          <TouchableOpacity style={styles.navAction} onPress={openCamera}>
            <Text style={styles.label}>
              <MaterialCommunityIcons name="camera" style={styles.navIcon} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navAction} onPress={openGallery}>
            <Text style={styles.label}>
              <MaterialCommunityIcons
                name="image-multiple"
                style={styles.navIcon}
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navAction} onPress={openFilePicker}>
            <Text style={styles.label}>
              <MaterialCommunityIcons name="upload" style={styles.navIcon} />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={{ width: "100%" }}
          data={files}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  padding: 6,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.grey,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <MaterialCommunityIcons
                  name="file"
                  size={30}
                  color={Colors.ambielBlue}
                  style={[{ marginRight: 6 }]}
                />
                <TouchableOpacity
                  onPress={() =>
                    downloadFile(ticket.id, item.id, item.extension)
                  }
                >
                  <Text style={{ flexShrink: 1, marginRight: 6 }}>
                    {item.id + " (" + item.size + " MB, "}{" "}
                    {"Stand: " + item.lastmodified + ")"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </ContainerLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  icon: {
    padding: 12,
    backgroundColor: Colors.lightYellow,
    color: Colors.orange,
    fontSize: 24,
    borderRadius: 12,
    overflow: "hidden",
    marginEnd: 12,
  },
  label: {
    color: Colors.grey,
    fontWeight: "600",
    fontSize: 14,
    verticalAlign: "middle",
  },
  navIcon: {
    marginStart: "auto",
    fontSize: 24,
  },
  navAction: {
    marginBottom: 0,
    marginLeft: 18,
  },
});

export default TicketTabMediaScreen;

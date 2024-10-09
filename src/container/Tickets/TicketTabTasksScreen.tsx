import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  LayoutAnimation,
  Alert,
} from "react-native";
import ContainerLayout from "../../components/layout/ContainerLayout";
import useTicketApi from "../../core/api/ticket";
import { useSelector } from "react-redux";
import TicketTasksCard from "../../components/shared/TicketTasksCard";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { ITicket } from "../../core/types/ticket";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITicketResponse } from "../../core/types/apiResponses/ticketResponse";
import { environment } from "../../core/config/environment";
import { selectIdentity } from "../../core/store/selectors/identity.selectors";
import axios from "axios";
import { ITask } from "../../core/types/task";
import AmbielText from "../../components/common/AmbielText";

type TicketTabTasksScreenProps = {
  navigation: any;
  route: { params: { ticket: ITicket } };
};

export default function TicketTabTasksScreen(props: TicketTabTasksScreenProps) {
  const { navigation, route } = props;
  const { ticket } = props.route.params;
  const { t } = useTranslation("global");
  const identity = useSelector(selectIdentity);

  /** Hooks **/
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("datetime-asc"); // Initial sort option: datetime
  const [tasks, setTasks] = useState<ITask[]>();
  useEffect(() => {
    getTicketDetails(ticket.id);
  }, []);

  // const filteredTicketTasks = ticket.tasks;

  async function getTicketDetails(ticket: number) {
    const endpoint = `${environment.api.baseUrl}/ticket?id=${ticket}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: identity?.access_token,
      },
    };
    try {
      const response = await axios.get<ITicketResponse>(endpoint, config);
      console.log(response.data.ticket?.tasks.length);
      setTasks(response.data.ticket?.tasks);
    } catch (e) {
      Alert.alert("error");
      // Alert.alert(e);
      console.log(e);
    }
  }

  // TODO: Load Ticket Data

  return (
    <ContainerLayout>
      <FlatList
        renderItem={({ item }) => (
          <View
            style={{
              height: 40,
              borderBottomColor: Colors.ambielBlue,
              borderBottomWidth: 1,
              justifyContent: "center",
              paddingVertical: 4,
              paddingHorizontal: 16,
            }}
          >
            <AmbielText>{item.subject}</AmbielText>
          </View>
        )}
        data={tasks}
      />
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 36,
    borderColor: Colors.ambielBlue,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sortOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sortOptionButton: {
    flex: 1,
    fontSize: 24,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGrey,
    color: Colors.black,
    borderRadius: 4,
    marginRight: 10,
  },
  sortOptionButtonIcon: {
    flex: 1,
    fontSize: 24,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    color: Colors.black,
    borderRadius: 4,
    marginRight: 10,
  },
  activeSortOption: {
    backgroundColor: Colors.ambielBlue,
    color: Colors.white,
  },
  inactiveSortOption: {
    backgroundColor: Colors.lightGrey,
    color: Colors.black,
  },
  sortOptionButtonText: {
    color: Colors.black,
    fontSize: 24,
    padding: 4,
    //fontWeight: 'bold',
  },
  headerRow: {
    marginBottom: 18,
  },
});

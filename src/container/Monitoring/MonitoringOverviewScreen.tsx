import {
  StyleSheet,
  Text,
  Alert,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IMonitoringResponse } from "../../core/types/apiResponses/monitoringResponse";
import { environment } from "../../core/config/environment";
import { selectIdentity } from "../../core/store/selectors/identity.selectors";
import { useSelector } from "react-redux";
import axios from "axios";
import ContainerLayout from "../../components/layout/ContainerLayout";
import MonitoringCard from "../../components/shared/MonitoringCard";
import { Colors } from "../../styles/colors";
import AmbielText from "../../components/common/AmbielText";
import AmbielView from "../../components/common/AmbielView";

type MonitoringOverviewScreenProps = {
  navigation: any;
};

export default function MonitoringOverviewScreen(
  props: MonitoringOverviewScreenProps
): JSX.Element {
  const { navigation } = props;
  const { t } = useTranslation("global");
  // const myhosts = getMonitoringDetails().then((response) => { response.hosts });

  // TODO TAM
  // URL https://app.ambiel.de/monitoring?type=hosts
  const endpoint = `${environment.api.baseUrl}/monitoring?type=hosts`;
  const identity = useSelector(selectIdentity);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: identity?.access_token,
    },
  };

  useEffect(() => {
    navigation.setOptions({
      title: `${t("monitoring")}`,
      headerBackTitle: t("back"),
    });
  }, [navigation]);

  const tam = axios
    .get<IMonitoringResponse>(endpoint, config)
    .then((response) => {
      response.data.value?.entries;
      console.log("Response: ", response.data.value);
      // console.log('Response: '+ JSON.stringify(this.monitoring_hosts));
      // console.log('Data: '+ response.data);
      // console.log('Success: '+ response.data.success);
    });

  const [myvalues, setPeople] = useState([
    { name: "desintest", display_name: "1" },
    { name: "desinmon01", display_name: "2" },
    { name: "desinbar01", display_name: "3" },
    { name: "desinimc01", display_name: "4" },
  ]);

  return (
    <ContainerLayout>
      <AmbielText>Übersicht aller aktiven Test-Ergebnisse:</AmbielText>
      <AmbielView style={styles.sortOptions}>
        <FlatList
          data={myvalues}
          keyExtractor={(item) => item.display_name}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.sortedElements}
              onPress={() =>
                navigation.navigate("MonitoringDetails", {
                  host: item,
                })
              }
            >
              <AmbielText>{item.name}</AmbielText>
            </TouchableOpacity>
          )}
        />
      </AmbielView>
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  sortedElements: {
    flexDirection: "row",
    marginBottom: 6,
    marginTop: 6,
  },
  sortOptions: {
    // backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

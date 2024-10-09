import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  LayoutAnimation,
  Alert
} from "react-native";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { useSelector } from "react-redux";
import TicketTasksCard from "../../components/shared/TicketTasksCard";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { ITicket } from '../../core/types/ticket';
import { ITicketResponse } from '../../core/types/apiResponses/ticketResponse';
import { environment } from '../../core/config/environment';
import { selectIdentity } from "../../core/store/selectors/identity.selectors";
import axios from 'axios';

type TicketTabTasksScreenProps = {
  navigation: any;
  route: { params: { ticket: ITicket } };
};
 
export default async function TicketTabTasksScreen(
  props: TicketTabTasksScreenProps
): Promise<JSX.Element> {
  const { navigation, route } = props;
  const { ticket } = props.route.params;
  const { t } = useTranslation("global");
  const identity = useSelector(selectIdentity);

  /** Hooks **/
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("datetime-asc"); // Initial sort option: datetime

  useEffect(() => {
  }, []);

  // const filteredTicketTasks = ticket.tasks;

  async function getTicketDetails(ticket: number): Promise<ITicketResponse> {
    const endpoint = `${environment.api.baseUrl}/ticket?id=${ticket}`;
    const identity = useSelector(selectIdentity);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: identity?.access_token,
      },
    };
    try {
      const response = await axios.get<ITicketResponse>(endpoint, config);
      return response.data;
    } catch (e) {
      Alert.alert('error');
      // Alert.alert(e);
      console.log(e);
      return { success: false };
    }
  } 

  // TODO: Load Ticket Data
  try {

    const fetchTicket = await getTicketDetails(ticket.id);
    // const sortedTicketTasks = await getTicketDetails(ticket.id);
    console.log('MY Object: '+ JSON.stringify(fetchTicket));
  
    <FlatList 
      data={fetchTicket.ticket}
      renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TaskDetails', { employee: item })
        }
      >
      <TicketTasksCard ticket={item} />
      </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      />
  } catch (error) {
  
    // if (fetchTicket.success !== 'success') {
      console.log('error'+ error);
    //  return;
    // }

  }

  { 
    // console.log('Tasks Length: '+ fetchTicket.ticket?.entries.length);
  }


  /*
  const fetchTicket = useTicketApi().getTicket(ticket.id);
  console.log('Tasks Description: '+ fetchTicket.tasks.description);
  console.log('Tasks Create Date: '+ fetchTicket.tasks?.create_date);

  console.log('DEBUG TAM==================');
  console.log('Ticket ID: '+ ticket.id);
  console.log('Ticket Subject: '+ ticket.subject);
  console.log('Ticket businesspartner_id: '+ ticket.businesspartner_id);
  console.log('Ticket description: '+ ticket.description);
  console.log('Ticket type: '+ ticket.type);
  console.log('Ticket category: '+ ticket.category);
  console.log('Ticket Resp: '+ ticket.responsible.first_name);
  console.log('Ticket Worker: '+ ticket.worker.first_name);
  console.log('Tasks Description: '+ ticket.tasks.description);
  console.log('Tasks Create Date: '+ ticket.tasks.create_date);

  */
  /*
  const filteredTicketTasks = ticket.tasks.filter(() => {
    LayoutAnimation.easeInEaseOut();
    if (searchQuery.trim() === "") {
      return true;
    } else if (Number(searchQuery.trim())) {
      return ticket.id.toString().includes(searchQuery.trim());
    } else {
      return ticket.subject
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
    }
  });
  */

  // const sortedTicketTasks = filteredTicketTasks;

  /*
  const sortedTicketTasks = filteredTicketTasks.sort((a, b) => {
    LayoutAnimation.easeInEaseOut();
    if (sortOption === "datetime-asc") {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    } else if (sortOption === "datetime-desc") {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    } else if (sortOption === "alphabetical-asc") {
      return a.subject.localeCompare(b.subject);
    } else if (sortOption === "alphabetical-desc") {
      return b.subject.localeCompare(a.subject);
    }
    return 0;
  });
  */

  const handleSortChange = (
    option:
      | "datetime-asc"
      | "datetime-desc"
      | "alphabetical-asc"
      | "alphabetical-desc"
  ) => {
    setSortOption(option);
  };

  return (
    <ContainerLayout>
      <View style={styles.container}>
        <TextInput
          clearButtonMode="always"
          style={styles.searchBar}
          placeholder="Suche nach Ticket Aufgabe"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <View style={styles.sortOptions}>
          <TouchableOpacity
            style={[
              styles.sortOptionButton,
              sortOption === "datetime-asc" && styles.activeSortOption,
            ]}
            onPress={() => handleSortChange("datetime-asc")}
          >
            <Text style={styles.sortOptionButtonText}>
              <MaterialCommunityIcons
                name="sort-calendar-ascending"
                style={[
                  styles.sortOptionButtonIcon,
                  sortOption === "datetime-asc" && styles.activeSortOption,
                ]}
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sortOptionButton,
              sortOption === "datetime-desc" && styles.activeSortOption,
            ]}
            onPress={() => handleSortChange("datetime-desc")}
          >
            <Text style={styles.sortOptionButtonText}>
              <MaterialCommunityIcons
                name="sort-calendar-descending"
                style={[
                  styles.sortOptionButtonIcon,
                  sortOption === "datetime-desc" && styles.activeSortOption,
                ]}
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sortOptionButton,
              sortOption === "alphabetical-asc" && styles.activeSortOption,
            ]}
            onPress={() => handleSortChange("alphabetical-asc")}
          >
            <Text style={styles.sortOptionButtonText}>
              <MaterialCommunityIcons
                name="sort-alphabetical-ascending"
                style={[
                  styles.sortOptionButtonIcon,
                  sortOption === "alphabetical-asc" && styles.activeSortOption,
                ]}
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sortOptionButton,
              sortOption === "alphabetical-desc" && styles.activeSortOption,
            ]}
            onPress={() => handleSortChange("alphabetical-desc")}
          >
            <Text style={styles.sortOptionButtonText}>
              <MaterialCommunityIcons
                name="sort-alphabetical-descending"
                style={[
                  styles.sortOptionButtonIcon,
                  sortOption === "alphabetical-desc" && styles.activeSortOption,
                ]}
              />
            </Text>
          </TouchableOpacity>
        </View>

      </View>
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

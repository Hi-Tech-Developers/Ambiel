import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  LayoutAnimation,
} from "react-native";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { useSelector } from "react-redux";
import { selectTicketsWithStatus } from "../../core/store/selectors/ticket.selectors";
import TicketCard from "../../components/shared/TicketCard";
import { useEffect, useState } from "react";
import useTicketHelper from "../../core/hooks/useTicketHelper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { selectTheme } from "../../core/store/selectors/theme.selectors";

type TicketsListScreenProps = {
  navigation: any;
  route: any;
};

export default function TicketsListScreen(
  props: TicketsListScreenProps
): JSX.Element {
  const { navigation, route } = props;
  const { t } = useTranslation("global");
  const theme = useSelector(selectTheme);

  /** Hooks **/
  const { getTicketStatusLabel } = useTicketHelper();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("datetime-asc"); // Initial sort option: datetime
  const ticketStatus = route.params.ticketStatus;
  const tickets = useSelector(selectTicketsWithStatus(ticketStatus));

  useEffect(() => {
    navigation.setOptions({
      title: getTicketStatusLabel(ticketStatus),
      headerBackTitle: t("back"),
    });
  }, [navigation]);

  const filteredTickets = tickets.filter((ticket) => {
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

  const sortedTickets = filteredTickets.sort((a, b) => {
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
          style={[
            styles.searchBar,
            {
              backgroundColor:
                theme === "dark" ? Colors.themeGrey : Colors.white,
              color: theme === "dark" ? Colors.white : Colors.black,
            },
          ]}
          placeholderTextColor={theme === "dark" ? Colors.white : Colors.grey}
          placeholder="Suche nach Ticket Nr. und Überschrift"
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

        <FlatList
          data={sortedTickets}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TicketDetails", { ticket: item })
              }
            >
              <TicketCard ticket={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
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

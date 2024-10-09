import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
} from "react-native";
import ContainerLayout from "../../components/layout/ContainerLayout";
import {
  selectEmployees,
  selectEmployeesLoaded,
} from "../../core/store/selectors/employee.selectors";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EmployeeCard from "../../components/shared/EmployeeCard";
import { useEffect, useState } from "react";
import useEmployeeHelper from "../../core/hooks/useEmployeeHelper";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

type EmployeesListScreenProps = {};

export default function EmployeesListScreen(
  props: EmployeesListScreenProps
): JSX.Element {
  const navigation = useNavigation();
  const { t } = useTranslation("global");

  /** Hooks **/
  const { getEmployeeStatusLabel } = useEmployeeHelper();
  const employees = useSelector(selectEmployees);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("employee-asc"); // Initial sort option: datetime

  useEffect(() => {
    navigation.setOptions({ 
      title: `${t("employees")} (${employees.length})`,
      headerBackTitle: t("back"),
    });
  }, [navigation]);

  const filteredEmployees = employees.filter((employee) => {
    LayoutAnimation.easeInEaseOut();
    if (searchQuery.trim() === "") {
      return true;
    } else if (Number(searchQuery.trim())) {
      return employee.employee_id.toString().includes(searchQuery.trim());
    } else {
      return employee.employee_name
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
    }
  });

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    LayoutAnimation.easeInEaseOut();
    if (sortOption === "employee-asc") {
      return a.employee_name.localeCompare(b.employee_name);
    } else if (sortOption === "employee-desc") {
      return b.employee_name.localeCompare(a.employee_name);
    }
    return 0;
  });

  const handleSortChange = (option: "employee-asc" | "employee-desc") => {
    setSortOption(option);
  };

  return (
    <ContainerLayout>
      <TextInput
        clearButtonMode="always"
        style={styles.searchBar}
        placeholder={t("search_for_employees")}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.container}>
        <FlatList
          data={sortedEmployees}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EmployeeDetailsScreen', { employee: item })
              }
            >
              <EmployeeCard employee={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.employee_id.toString()}
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
    marginBottom: 12,
    marginTop: 0,
  },
  headerRow: {
    marginBottom: 6,
  },
});

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
  selectBusinessPartners,
  selectBusinessPartnersLoaded,
  selectBusinessPartnersWithStatus,
} from "../../core/store/selectors/businesspartners.selectors";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BusinessPartnerCard from "../../components/shared/BusinessPartnerCard";
import { useEffect, useState } from "react";
import useBusinessPartnerHelper from "../../core/hooks/useBusinessPartnerHelper";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { selectTheme } from "../../core/store/selectors/theme.selectors";

type BusinessPartnersListProps = {
  navigation: any;
  route: any;
};

export default function BusinessPartnersList(
  props: BusinessPartnersListProps
): JSX.Element {
  const { navigation, route } = props;
  const { t } = useTranslation("global");
  const theme = useSelector(selectTheme);

  /** Hooks **/
  const { getBusinessPartnerStatusLabel } = useBusinessPartnerHelper();

  const businesspartnerStatus = route.params.businesspartnerStatus;
  const businesspartnerType = route.params.businesspartnerType;

  const businesspartners = useSelector(
    selectBusinessPartnersWithStatus(businesspartnerStatus, businesspartnerType)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("bp-asc"); // Initial sort option: datetime

  useEffect(() => {
    navigation.setOptions({
      title: `${t("business_partners")} (${businesspartners.length})`,
      headerBackTitle: t("back"),
    });
  }, [navigation]);

  const filteredBusinessPartners = businesspartners.filter((bp) => {
    LayoutAnimation.easeInEaseOut();
    if (searchQuery.trim() === "") {
      return true;
    } else if (Number(searchQuery.trim())) {
      return bp.businesspartner_id.toString().includes(searchQuery.trim());
    } else {
      return bp.businesspartner_name
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
    }
  });

  const handleSortChange = (option: "bp-asc" | "bp-desc") => {
    setSortOption(option);
  };

  return (
    <ContainerLayout>
      <TextInput
        clearButtonMode="always"
        style={[
          styles.searchBar,
          {
            backgroundColor: theme === "dark" ? Colors.themeGrey : Colors.white,
            color: theme === "dark" ? Colors.white : Colors.black,
          },
        ]}
        placeholderTextColor={theme === "dark" ? "white" : "gray"}
        placeholder="Geschäftspartner Suche nach Namen & Nummer"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.container}>
        <FlatList
          data={filteredBusinessPartners}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BusinessPartnerDetails", {
                  businesspartner: item,
                })
              }
            >
              <BusinessPartnerCard businesspartner={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.businesspartner_id.toString()}
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
  headerRow: {
    marginBottom: 6,
  },
});

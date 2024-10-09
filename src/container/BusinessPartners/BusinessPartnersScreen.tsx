import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectIdentity } from "../../core/store/selectors/identity.selectors";
import { useEffect } from "react";
import {
  selectBusinessPartners,
  selectBusinessPartnersLoaded,
} from "../../core/store/selectors/businesspartners.selectors";
import { AppDispatch } from "../../core/store/store";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { logo } from "../../styles/images";
import BusinessPartnerSummaryNavigation from "./BusinessPartnerSummaryNavigationScreen";
import { Routes } from "../../navigation/routes";
import { BusinessPartnerStatus } from "../../core/types/constants/businessPartnerStatus";
import { BusinessPartnerType } from "../../core/types/constants/businessPartnerType";
import { fetchBusinessPartners } from "../../core/store/app.effects";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { selectTheme } from "../../core/store/selectors/theme.selectors";

type BusinessPartnersProps = {
  navigation: any;
  route: any;
};

export default function BusinessPartners(
  props: BusinessPartnersProps
): JSX.Element {
  const { navigation, route } = props;
  // const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation("global");
  const theme = useSelector(selectTheme);
  /** Store **/
  const identity = useSelector(selectIdentity);
  const businesspartners = useSelector(selectBusinessPartners);
  const businesspartnersLoaded = useSelector(selectBusinessPartnersLoaded);

  /** Initial loading of businesspartners **/
  useEffect(() => {
    // Alert.alert('businesspartnersLoaded: '+ businesspartnersLoaded);
    dispatch(fetchBusinessPartners(identity!.access_token));
  }, []);

  /** Handle click on navigation-item **/
  function businesspartnerSummaryNavigationPressHandler(
    businesspartnerStatus?: BusinessPartnerStatus,
    businesspartnerType?: BusinessPartnerType
  ): void {
    if (businesspartnerStatus) {
      navigation.navigate(Routes.BUSINESSPARTNERS_LIST, {
        businesspartnerStatus: businesspartnerStatus,
        businesspartnerType: businesspartnerType,
      });
    } else {
      navigation.navigate(Routes.BUSINESSPARTNERS_LIST);
    }
  }

  return (
    <ContainerLayout>
      {businesspartnersLoaded ? (
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Image
              style={[
                styles.ambielLogo,
                { tintColor: theme === "dark" ? "white" : "black" },
              ]}
              source={logo}
            />
          </View>

          <BusinessPartnerSummaryNavigation
            // numberOfBusinessPartners={newBusinessPartnersCount}
            // numberOfBusinessPartners=11
            label={t("customers_active")}
            iconColor={Colors.green}
            backgroundColor={Colors.lightGrey}
            onPress={() =>
              businesspartnerSummaryNavigationPressHandler(
                BusinessPartnerStatus.ACTIVE,
                BusinessPartnerType.CUSTOMER
              )
            }
            iconname="star-box-outline"
          />

          <BusinessPartnerSummaryNavigation
            // numberOfBusinessPartners={newBusinessPartnersCount}
            // numberOfBusinessPartners=11
            label={t("potential_buyers")}
            iconColor={Colors.ambielBlue}
            backgroundColor={Colors.lightGrey}
            onPress={() =>
              businesspartnerSummaryNavigationPressHandler(
                BusinessPartnerStatus.ACTIVE,
                BusinessPartnerType.POTENTIAL_BUYER
              )
            }
            iconname="account-search-outline"
          />

          <BusinessPartnerSummaryNavigation
            // numberOfBusinessPartners={newBusinessPartnersCount}
            // numberOfBusinessPartners=11
            label={t("customers_inactive")}
            iconColor={Colors.grey}
            backgroundColor={Colors.lightGrey}
            onPress={() =>
              businesspartnerSummaryNavigationPressHandler(
                BusinessPartnerStatus.INACTIVE,
                BusinessPartnerType.CUSTOMER
              )
            }
            iconname="sleep"
          />

          <BusinessPartnerSummaryNavigation
            // numberOfBusinessPartners={newBusinessPartnersCount}
            // numberOfBusinessPartners=11
            label={t("suppliers")}
            iconColor={Colors.yellow}
            backgroundColor={Colors.lightGrey}
            onPress={() =>
              businesspartnerSummaryNavigationPressHandler(
                BusinessPartnerStatus.ACTIVE,
                BusinessPartnerType.SUPPLIER
              )
            }
            iconname="truck-delivery-outline"
          />

          <BusinessPartnerSummaryNavigation
            // numberOfBusinessPartners={newBusinessPartnersCount}
            // numberOfBusinessPartners=11
            // cogs
            label={t("manufacturer")}
            iconColor={Colors.black}
            backgroundColor={Colors.lightGrey}
            onPress={() =>
              businesspartnerSummaryNavigationPressHandler(
                BusinessPartnerStatus.ACTIVE,
                BusinessPartnerType.MANUFACUTURER
              )
            }
            iconname="cogs"
          />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            color={Colors.ambielBlue}
            style={{ marginBottom: 10 }}
          />
          <Text>Geschäftspartner werden geladen...</Text>
        </View>
      )}
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 50,
  },
  headerRow: {
    marginBottom: 18,
  },
  ambielLogo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

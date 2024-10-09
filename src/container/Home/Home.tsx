import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  SafeAreaView,
  Platform,
} from "react-native";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { logo } from "../../styles/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectAccount } from "../../core/store/selectors/account.selectors";
import { selectAccountType } from "../../core/store/selectors/accounttype.selectors";
import useIdentityHelper from "../../core/hooks/useIdentityHelper";
import { Routes } from "../../navigation/routes";
import { BusinessPartnerStatus } from "../../core/types/constants/businessPartnerStatus";
import { resetAction } from "../../navigation/Routing";
import { Colors } from "../../styles/colors";
import { BusinessPartnerType } from "../../core/types/constants/businessPartnerType";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import AmbielText from "../../components/common/AmbielText";
import AmbielView from "../../components/common/AmbielView";

type HomeProps = {
  navigation: any;
};

export default function Home(props: HomeProps): JSX.Element {
  const navigation = useNavigation();
  const { t } = useTranslation("global");
  const theme = useSelector(selectTheme);
  /** Hooks **/
  const { deactivateIdentity } = useIdentityHelper();

  /** Store **/
  const account = useSelector(selectAccount);
  const accountType = useSelector(selectAccountType);
  console.log("Account Type =============  ", accountType);

  /** Logout-Button-Press handler **/
  async function logoutBtnPressHandler(): Promise<void> {
    await deactivateIdentity();
    resetAction(navigation, Routes.LOGIN);
  }

  // function ticketBtnPressHandler(): number {
  //   Alert.alert('Hi!');
  //   return 0;
  // }

  function ticketsBtnPressHandler(): void {
    // navigation.navigate(Routes.TICKETS_STACK_NAVIGATOR, {});
    navigation.navigate(Routes.TICKETS_VIEW, {
      pageName: Routes.TICKETS_VIEW,
    });
    // navigation.navigate(Routes.TICKETS_LIST, {ticketStatus: TicketStatus.IN_PROGRESS});
    // navigation.navigate(Routes.TICKETS_LIST, {ticketStatus: TicketStatus.NEW});
  }
  function businesspartnersBtnPressHandler(): void {
    navigation.navigate(Routes.BUSINESSPARTNERS, {
      businesspartnerStatus: BusinessPartnerStatus.ACTIVE,
      businesspartnerType: BusinessPartnerType.CUSTOMER,
    });
  }
  function equipmentBtnPressHandler(): void {
    navigation.navigate(Routes.EQUIPMENT_OVERVIEW, {});
  }
  function holidaysBtnPressHandler(): void {
    navigation.navigate(Routes.EMPLOYEE_HOLIDAYS_LIST, {});
  }
  function salesOpportunitiesBtnPressHandler(): void {
    navigation.navigate(Routes.SALES_OPPORTUNITIES_LIST, {});
  }
  function contactsBtnPressHandler(): void {
    navigation.navigate(Routes.BUSINESSPARTNER_CONTACTS_LIST, {});
  }
  function carpoolBtnPressHandler(): void {
    navigation.navigate(Routes.CARPOOL_CARS_LIST, {});
  }
  function employeesBtnPressHandler(): void {
    navigation.navigate(Routes.EMPLOYEES_LIST, {});
  }
  function itemsBtnPressHandler(): void {
    navigation.navigate(Routes.ITEMS_LIST, {});
  }
  function tickettasksBtnPressHandler(): void {
    navigation.navigate(Routes.TICKET_TASKS_STACK_NAVIGATOR, {});
  }
  function quotesBtnPressHandler(): void {
    navigation.navigate(Routes.SALES_QUOTES_LIST, {});
  }
  function workinghoursBtnPressHandler(): void {
    navigation.navigate(Routes.EMPLOYEE_WORKINGHOURS_LIST, {});
  }
  function statisticsBtnPressHandler(): void {
    navigation.navigate(Routes.STATISTICS_OVERVIEW, {});
  }
  function performanceBtnPressHandler(): void {
    navigation.navigate(Routes.PERFORMANCE_OVERVIEW, {});
  }
  function userMenuhandler() {
    navigation.navigate(Routes.ACCOUNT_TYPE);
  }
  function monitoringBtnPressHandler(): void {
    navigation.navigate(Routes.MONITORING_OVERVIEW, {});
  }
  function compassBtnPressHandler(): void {
    navigation.navigate(Routes.COMPASS_OVERVIEW, {});
  }
  // Alert.alert('Account Typ: '+ account?.type);
  // Alert.alert('Account Typ: '+ state.accountType);
  /*
  if(account?.type === "customer") {
    return (    <ContainerLayout><Text>Customer NAVI Buttons</Text></ContainerLayout>)
  }
  if(account?.type === "supplier") {
    return (    <ContainerLayout><Text>Supplier NAVI Buttons</Text></ContainerLayout>)
  }
  */

  return (
    <ContainerLayout>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.companylogoRowList}>
          <View>
            <TouchableOpacity
              style={styles.headerRow}
              onPress={logoutBtnPressHandler}
            >
              <Image
                style={[
                  styles.ambielLogo,
                  { tintColor: theme === "dark" ? "white" : "black" },
                ]}
                source={logo}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.alert}>
            <TouchableOpacity
              style={styles.headerRow}
              onPress={monitoringBtnPressHandler}
            >
              <AmbielText style={styles.alertText}>
                <MaterialCommunityIcons
                  name="information-outline"
                  style={styles.alertIcon}
                />{" "}
                {t("infrastructure_ok")}
              </AmbielText>
            </TouchableOpacity>
          </View>
        </View>
        {account && (
          <AmbielView style={[styles.userContainer]}>
            <TouchableOpacity onPress={userMenuhandler}>
              <Image
                style={[
                  styles.userIcon,
                  {
                    backgroundColor:
                      theme === "dark" ? Colors.themeGrey : "white",
                  },
                ]}
                source={{ uri: "https://ambiel.de/img/account/male.png" }}
              />
            </TouchableOpacity>
            <View style={styles.userContent}>
              <AmbielText style={[styles.userName]}>
                {account.person}
              </AmbielText>
              <AmbielText style={[styles.userBusinessPartnerName]}>
                {account.businesspartner_name}
                {" ("}
                {account.type}
                {") "}
              </AmbielText>
            </View>
          </AmbielView>
        )}

        {
          // <Text style={styles.heading}>Funktionen</Text>
        }

        <View style={styles.homeServicesContainer}>
          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={businesspartnersBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="handshake-outline"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("business_partners")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={ticketsBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="ticket-outline"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("tickets")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={equipmentBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="devices"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("equipment")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={contactsBtnPressHandler}
              style={styles.serviceContainerDisabled}
            >
              <MaterialCommunityIcons
                name="contacts-outline"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("contacts")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={carpoolBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="car-side"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("carpool")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={itemsBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="barcode"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("items")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={employeesBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="account-group"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("team")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={tickettasksBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="checkbox-marked-circle-plus-outline"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("tasks")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={workinghoursBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="clipboard-text-clock"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("time_reports")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={holidaysBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="emoticon-outline"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("leaves")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={quotesBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="file-document"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("quotes")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={salesOpportunitiesBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons name="offer" style={styles.serviceIcon} />
              <Text style={styles.serviceLabel}>{t("opportunities")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={performanceBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="speedometer"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("performance")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={statisticsBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="chart-bar"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("statistics")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesRowsList}>
            <TouchableOpacity
              onPress={monitoringBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons name="radar" style={styles.serviceIcon} />
              <Text style={styles.serviceLabel}>{t("monitoring")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={compassBtnPressHandler}
              style={styles.serviceContainer}
            >
              <MaterialCommunityIcons
                name="compass-rose"
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceLabel}>{t("compass")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 50,
  },
  headerRow: {
    margin: 0,
    padding: 0,
  },
  ambielLogo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  alert: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 0,
    borderRadius: 12,
    borderColor: "rgba(0,0,0,0.1)",
    flex: 0.65,
    marginBottom: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGreen,
    flexDirection: "row",
    border: 0,
  },
  alertIcon: {
    fontSize: 18,
    color: Colors.green,
    margin: 0,
    padding: 0,
  },
  alertText: {
    color: Colors.green,
    fontWeight: "500",
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  userContainer: {
    marginVertical: 20,
    paddingVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.lightGrey,
  },
  userIcon: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginRight: 10,
  },
  userContent: {
    marginTop: "auto",
    marginBottom: "auto",
    flexShrink: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 2,
  },
  userBusinessPartnerName: {
    fontSize: 11,
    marginBottom: 10,
  },
  userBusinessPartnerNumber: {
    color: "rgba(96, 105, 117, 0.8)",
  },
  homeServicesContainer: {},
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  servicesRowsList: {
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  companylogoRowList: {
    borderWidth: 0,
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    verticalAlign: "center",
  },
  serviceContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "rgba(0,0,0,0.1)",
    flex: 0.45,
    marginBottom: 6,
    height: 80,
    backgroundColor: Colors.ambielBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceContainerDisabled: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "rgba(0,0,0,0.1)",
    flex: 0.45,
    marginBottom: 6,
    height: 80,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceIcon: {
    color: "white",
    fontSize: 28,
    marginBottom: 8,
  },
  serviceLabel: {
    color: "white",
    fontSize: 13,
  },
});

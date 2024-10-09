import React, { useEffect, useState } from 'react';
import ContainerLayout from '../../components/layout/ContainerLayout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AccountTypeSelector from './AccountTypeSelector';
import {Colors} from "../../styles/colors";
import { useDispatch, useSelector } from 'react-redux';
import { setAccountType } from '../../core/store/app.slice';
import { selectAccountType } from '../../core/store/selectors/accounttype.selectors';
import { useTranslation } from 'react-i18next';
import { AccountTypes } from '../../core/types/constants/accountTypes';


type MenuProps = {
  navigation: any;
};

export default function AccountTypeSelect(props: MenuProps): JSX.Element {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation('global');

  const selectedAccountType = useSelector(selectAccountType);
  const handleAccountTypeSelect = (accountType: AccountTypes) => {
    dispatch(setAccountType(accountType));
  };

  return (
    <ContainerLayout>
      <ScrollView style={styles.container}>
        <AccountTypeSelector
          label={t('customers')}
          backgroundColor={Colors.white}
          onPress={() => handleAccountTypeSelect(AccountTypes.CUSTOMER)}
          isSelected={selectedAccountType === 'customer'}
        />
        <AccountTypeSelector
          label={t('supplier')}
          backgroundColor={Colors.white}
          onPress={() => handleAccountTypeSelect(AccountTypes.SUPPLIER)}
          isSelected={selectedAccountType === 'supplier'}
        />
        <AccountTypeSelector
          label={t('manufacturer')}
          backgroundColor={Colors.white}
          onPress={() => handleAccountTypeSelect(AccountTypes.MANUFACUTURER)}
          isSelected={selectedAccountType === 'manufacturer'}
        />
        <AccountTypeSelector
          label={t('employee')}
          backgroundColor={Colors.white}
          onPress={() => handleAccountTypeSelect(AccountTypes.EMPLOYEE)}
          isSelected={selectedAccountType === 'employee'}
        />
        <AccountTypeSelector
          label={t('registereduser')}
          backgroundColor={Colors.white}
          onPress={() => handleAccountTypeSelect(AccountTypes.REGISTERED_USER)}
          isSelected={selectedAccountType === 'registered_user'}
        />
      </ScrollView>
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 18,
  },
});

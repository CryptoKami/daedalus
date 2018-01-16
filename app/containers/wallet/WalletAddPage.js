// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import WalletAddDialog from '../../components/wallet/WalletAddDialog';
import WalletCreateDialog from '../../components/wallet/WalletCreateDialog';
import WalletRestoreDialog from '../../components/wallet/WalletRestoreDialog';
import WalletFileImportDialog from '../../components/wallet/file-import/WalletFileImportDialog';
import WalletBackupDialog from '../../components/wallet/WalletBackupDialog';
import WalletFileImportDialogContainer from './dialogs/WalletFileImportDialogContainer';
import WalletRestoreDialogContainer from './dialogs/WalletRestoreDialogContainer';
import WalletBackupDialogContainer from './dialogs/WalletBackupDialogContainer';
import WalletCreateDialogContainer from './dialogs/WalletCreateDialogContainer';
import WalletAddDialogContainer from './dialogs/WalletAddDialogContainer';
import type { InjectedProps } from '../../types/injectedPropsType';
import environment from '../../environment';

type Props = InjectedProps;

@inject('actions', 'stores') @observer
export default class WalletAddPage extends Component<Props> {

  static defaultProps = { actions: null, stores: null };

  onClose = () => {
    if (this.props.stores[environment.API].wallets.hasAnyWallets) {
      this.props.actions.dialogs.closeActiveDialog.trigger();
    } else {
      this.props.actions.dialogs.open.trigger({
        dialog: WalletAddDialog,
      });
    }
  };

  render() {
    const { uiDialogs } = this.props.stores;
    let activeDialog = null;

    if (uiDialogs.isOpen(WalletAddDialog)) {
      activeDialog = <WalletAddDialogContainer />;
    }

    if (uiDialogs.isOpen(WalletCreateDialog)) {
      activeDialog = <WalletCreateDialogContainer onClose={this.onClose} />;
    }

    if (uiDialogs.isOpen(WalletBackupDialog)) {
      activeDialog = <WalletBackupDialogContainer onClose={this.onClose} />;
    }

    if (uiDialogs.isOpen(WalletRestoreDialog)) {
      activeDialog = <WalletRestoreDialogContainer onClose={this.onClose} />;
    }

    if (uiDialogs.isOpen(WalletFileImportDialog)) {
      activeDialog = <WalletFileImportDialogContainer onClose={this.onClose} />;
    }

    return activeDialog;
  }

}

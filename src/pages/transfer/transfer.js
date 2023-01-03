import { getAccountList, insertTransfer } from './transfer.api';
import {
  setAccountOptions,
  getDate,
  transferMessage,
} from './transfer.helpers';
import { history } from '../../core/router';
import {
  onSetError,
  onUpdateField,
  onSetFormErrors,
  onSubmitForm,
} from '../../common/helpers';
import { formValidation } from './tranfer.validation';

const params = history.getParams();

let transfer = {
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  date: '',
  email: '',
  accountID: '',
};

getAccountList().then((accountList) => {
  transfer = {
    ...transfer,
    accountID: setAccountOptions(accountList, params.id),
  };
  getDate();
});

onUpdateField('select-account', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, accountID: value };

  formValidation
    .validateField('accountID', transfer.accountID)
    .then((result) => {
      onSetError('select-account', result);
    });
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, iban: value };
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, name: value };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, amount: value };
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, concept: value };
  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, notes: value };
  formValidation.validateField('notes', transfer.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('date', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, date: value };
  formValidation.validateField('date', transfer.date).then((result) => {
    onSetError('date', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, email: value };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      insertTransfer(transfer).then(() => {
        transferMessage();
        setTimeout(() => {
          history.back();
        }, 2000);
      });
    }
  });
});

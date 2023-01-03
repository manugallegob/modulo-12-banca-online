import { getMovements } from './movements.api';
import { history } from '../../core/router';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToViewModel } from './movements.mappers';
import { getAccountDetails } from './movements.api';

const params = history.getParams();

getMovements(params.id).then((apiMovements) => {
  console.log(apiMovements);
  const movements = mapMovementsListFromApiToViewModel(apiMovements);
  addMovementRows(movements);
});

getAccountDetails(params.id).then((account) => {
  document.getElementById('alias').innerHTML = account.name;
  document.getElementById('iban').innerHTML = account.iban;
  document.getElementById('balance').innerHTML = `${account.balance} €`;
});

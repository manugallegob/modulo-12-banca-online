const getOption = (account) => {

  const option = document.createElement('option');
  option.value = account.id;
  option.textContent = account.name;
  return option;
};

export const setAccountOptions = (accounts, selectedId) => {
  const select = document.getElementById('select-account');
  const optionEmpty = document.createElement('option');
  optionEmpty.textContent = '- Selecciona una cuenta -';
  optionEmpty.value="";
  select.appendChild(optionEmpty)

  accounts.forEach((account) => {
    const option = getOption(account);
    select.appendChild(option); 
  });

    if (selectedId) {
      select.value = selectedId;
    } 

    return select.value;
};

export const getDate = () => {
  const date = new Date();
  const minDate = `
  ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  document.getElementById('date').setAttribute('min', minDate);
};

export const transferMessage = () => {
  document.getElementById('transfer-message').style.display = "block";
}

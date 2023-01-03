export const mapMovementsListFromApiToViewModel = (movementsList) => {
    return movementsList.map((movement) => mapMovementFromApiToViewModel(movement));
  };
  
  const mapMovementFromApiToViewModel = (movement) => {
    return {
        description: movement.description,
        balance: `${movement.balance} €`,
        amount: `${movement.amount} €`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    };
  };
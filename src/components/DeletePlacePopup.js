import PopupWithForm from '../components/PopupWithForm';

function DeletePlacePopup({isOpen, onClose, onDelete}) {
  function handleSumbit(e) {
    e.preventDefault();
    onDelete();
  }

  return (
    <PopupWithForm title="Вы уверены?" name="delete-picture" isOpen={isOpen} onClose={onClose} onSubmit={handleSumbit} buttonText="Да" />
  );
}

export default DeletePlacePopup;

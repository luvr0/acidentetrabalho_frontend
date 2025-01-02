import './style.css';

function DefaultButton({ text = "Tire suas dúvidas!", isWhatsapp = false }) {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const redirectToWhatsapp = () => {
      const phoneNumber = "55035992185459";
      const message = encodeURIComponent("Olá, gostaria de tirar algumas dúvidas!");
      const whatsappURL = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${message}`;

      window.open(whatsappURL, "_blank");
  };

    // Função de clique
    const handleClick = () => {
        if (isWhatsapp) {
            redirectToWhatsapp();
        } else {
            scrollToBottom();
        }
    };

    return (
        <button 
            className='defaultbutton' 
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default DefaultButton;

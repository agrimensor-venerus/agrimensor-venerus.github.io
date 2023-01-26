function mostrargif() {
    document.getElementById('gif').classList.add('mostrar');

    setTimeout(() => {
        document.getElementById('gif').classList.remove('mostrar');
    }, 1900);
}
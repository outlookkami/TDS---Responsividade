let indexAtual = 0;
function BannerTroca(direcao){
    const banners = document.querySelectorAll('.banner');
    const totalBanners = banners.length;

    indexAtual += direcao;

    if (indexAtual >= totalBanners){
        indexAtual = 0;
    }

    if (indexAtual < 0){
        indexAtual = totalBanners - 1;
    }

    const painelBanners = document.querySelector('.painelBanners');
    painelBanners.style.transform = `translateX(-${indexAtual * 100}%)`;
}
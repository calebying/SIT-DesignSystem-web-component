<template>
    <sit-card orientation="horizontal">
        <img slot="image" alt="img alternate text goes here" width="467" height="312"
        src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal Image Card</h3>
        <span slot="description">horizontal card with card orientation set to horizontal</span>
        <a href="#" slot="link">Go somewhere <sit-icon name="arrow-right"></sit-icon></a>
    </sit-card>
    <sit-card orientation="horizontal" imagePosition="after">
        <img slot="image" alt="img alternate text goes here" width="467" height="312"
        src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal Image Card</h3>
        <span slot="description">horizontal card with card orientation set to horizontal</span>
        <a href="#" slot="link">Go somewhere <sit-icon name="arrow-right"></sit-icon></a>
    </sit-card>
    <sit-card>
        <img slot="image" alt="img alternate text goes here"
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="title">Card</span>
        <span slot="description">Some quick example text to build on the card title and make up the bulk of the card's
            content.</span>
        <a slot="link" href="https://google.com">Go somewhere</a>
    </sit-card>
    <sit-card imageAdjustment="padding around">
        <img slot="image" alt="img alternate text goes here"
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="title">Card</span>
        <span slot="description">Some quick example text to build on the card title and make up the bulk of the card's
            content.</span>
        <a slot="link" href="https://google.com">Go somewhere</a>
    </sit-card>
    <sit-card imageAdjustment="aspect ratio">
        <img slot="image" alt="img alternate text goes here"
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="title">Card</span>
        <span slot="description">Some quick example text to build on the card title and make up the bulk of the card's
            content.</span>
        <a slot="link" href="https://google.com">Go somewhere</a>
    </sit-card>
    <sit-card>
        <sit-icon slot="icon" name="placeholder" size="3-xl"></sit-icon>
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical Icon Card</h3>
        <span slot="description">default vertical card</span>
        <sit-link slot="link">
        <a href="#">Go somewhere <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
    </sit-card>
    <sit-card orientation="horizontal">
        <sit-icon slot="icon" name="placeholder" size="3-xl"></sit-icon>
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal Icon Card</h3>
        <span slot="description">horizontal card with card orientation set to horizontal</span>
        <sit-link slot="link">
        <a href="#">Go somewhere <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
    </sit-card>
</template>

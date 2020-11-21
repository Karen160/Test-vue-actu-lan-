<template>
    <header>
        <div id="head">
            <img src="../assets/actu-lan-header2.png" alt="Header d'Actu lan">
            <div id="form">
                <div>
                    <label>Pseudo</label>
                    <input type="text" name="pseudo" required placeholder="Pseudo">
                </div>
                <br>
                <div>
                    <label>Mot de passe</label>
                        <input type="password" name="mdp" required placeholder="Mot de passe">
                </div>
            </div>
        </div>
        <nav>
            <a href="">Accueil</a>
            <a href="">Jeux</a>
            <a href="">Calendrier</a>
            <a href="">Association</a>
            <a href="">Galerie</a>
            <a href="">Inscription</a>
            <a href="">Recherche</a>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'navTest',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head{
    position: absolute;
    width: 100%;
}

#head img{
    z-index: 1;
    width: 100%;
}

#head #form{
    position: relative;
    z-index: 10;
    display: block;
    float: right;
    text-align: right;
    padding-right: 10px;
    top: -130px;
}

#head #form label{
    padding: 5px;
    color: white;
}

#head #form input{
    border-radius: 15px;
    padding: 5px;
}

nav{
    position: relative;
    top: 180px;
    background-color: #29AAD5;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
}

a{
    color:white;
    font-weight: 500;
    text-decoration: none;
}
</style>

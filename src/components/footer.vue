<template>
    <div>
        <ul>
            <a href="#"><li>Mentions légales</li></a>
            <a href="#"><li>Nous contacter</li></a>
            <a href="#"><li>Nos partenaires</li></a>
            <a href="#"><li>Publicité</li></a>
            <li><input type="text"><button></button></li>
        </ul>
    </div>
</template>


<script>
export default {
    name : 'foooter',
}
</script>


<style scoped>
    div{
        height: 75px;
        background-color: #29AAD5;
        position: fixed;
        bottom: 0;
        margin-top: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100%;
    }
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        color:white;
    }
    button{
        height: 22px;
        width: 22px;
        margin: 0;
        padding: 0;
        padding-bottom: 5px;
    }
    a{
        text-decoration: none;
        color: white;
    }



</style>
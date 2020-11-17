<template>
<div class="table">
    <h1> {{msg}}</h1>
    <table>
        <thead>
            <tr>
                <th>Commande</th>
                <th>Date de la commande</th>
                <th>Date de livraison</th>
                <th>Statut</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1 </td>
                <td>10 octobre </td>
                <td>21 octobre </td>
                <td>livré </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: 'tableau',
    props: {
        msg: String
    }
}
</script>

<style scoped>
.table {
    color: brown;
    margin-left: 300px;
}
</style>

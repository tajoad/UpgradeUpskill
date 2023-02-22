<template>
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="h3">Customer</p>
                    <ul class="list-group">
                        <li class="list-group-item">
                            name: {{ name }}
                        </li>
                        <li class="list-group-item">
                            age: {{ age }}
                        </li>
                        <li class="list-group-item">
                            designation: {{ desgination }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:"Customer",
        props: {
            name: {type : String, require :true},
            age: {type : Number, require :true},
            designation: {type : String, require :true}
        }
    }
</script>

<style scoped>

</style>
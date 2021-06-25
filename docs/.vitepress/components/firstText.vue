<template>
    <div>
        <p>测试</p>
        {{JSON.stringify(form)}}
    </div>
</template>
<script lang="ts">
    import {
        defineComponent,
        reactive
    } from 'vue'

    export default defineComponent({
        setup() {
            console.log(123123123);
            
            const form = reactive({
                username: 'test',
                password: 'test',
                uuid: '1',
                code: '1'
            })
            return {
                form
            }
        }
    })
</script>
<template>
    <div id="app">
        <grid :data="data" :columns="columns"></grid>
    </div>
</template>

<script>
    import grid from './components/grid.vue'
    import TableInput from './components/table-input.vue'
    import api from './api'
    export default {
        name: 'app',
        data(){
            return {
                data:[],
                columns:[]
            }
        },
        created(){
            api().then(res=>{
                res.columns = res.columns.map(col=>{
                    col.render = (h,{value,index})=>{
                        return h(TableInput,{
                            props:{
                                value:value,
                                name:col.key,
                                index,
                                type:col.type,
                                map:col.map,
                            },
                            on:{
                                edit:({key,value,index})=>{
                                    this.data[index][key] = value
                                }
                            }
                        })
                    };
                    if(col.type === 'input'){
                        col.renderHead = (h)=>{
                            return h('span',{
                                domProps: {
                                    innerHTML: `${col.title} (编辑框)`
                                },
                                on:{
                                    click:()=>{
                                        alert('编辑框')
                                    }
                                }
                            })
                        }
                    }else if(col.type === 'select'){
                        col.renderHead = (h)=>{
                            return h('span',{
                                domProps: {
                                    innerHTML: `${col.title} (下拉框)`
                                },
                                on:{
                                    click:()=>{
                                        alert('下拉框')
                                    }
                                }
                            })
                        }
                    }
                    return col
                });
                Object.assign(this,res)
            })
        },
        components: {
            grid,
            TableInput
        }
    }
</script>

<style>

</style>

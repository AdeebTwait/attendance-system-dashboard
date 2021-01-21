/* eslint-disable vue/valid-template-root */
<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form :title="`Hall ${id}`" card_title="Hall Information"></base-form>
    </div>
</template>

<script>
  import BaseForm from '@/components/BaseForm.vue';

export default {
    name: 'view-hall',
    components: {
        BaseForm
    },
    data() {
        return {
            id: 500,
        }
    }
}
</script>
<template>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    <div>
    <base-form :title="`Hall ${id}`" card_title="Hall Information"></base-form>
    </div>
</template>

<script>

export default {
    name: 'hall-view',
    data() {
        return {
            id: 500,
        }
    }
}
</script>
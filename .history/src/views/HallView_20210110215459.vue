<template>
    <base-form :title="`Hall ${id}`" card_title="Hall Information"></base-form>
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
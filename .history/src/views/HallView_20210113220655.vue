<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form :title="`Hall ${id}`" card_title="Hall Information">
            <template #inputs>
                <base-input alternative=""
                    label="Hall Number"
                    placeholder="Hall Number"
                    input-classes="form-control-alternative"      
                />
                <base-input alternative=""
                    label="Hall Description"
                    placeholder="Hall Description"
                    input-classes="form-control-alternative"      
                />
            </template>
        </base-form>
    </div>
</template>

<script>
export default {
    name: 'view-hall',
    data() {
        return {
            id: 500,
        }
    }
}
</script>
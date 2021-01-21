<template>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">{{title}}</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">{{card_title}}</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <slot name="input" class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Last name"
                                                        placeholder="Last name"
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- <hr class="my-4" /> -->
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
</template>
<script>
  export default {
    name: 'base-form',
   
    props: {
        title: String,
        card_title: String,
    }
  };
</script>
<style></style>

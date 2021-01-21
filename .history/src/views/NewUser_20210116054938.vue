<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form title="New User" card_title="User Information">
            <template #inputs>
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Name"
                            placeholder="Name"
                            input-classes="form-control-alternative"
                            v-model="user.name"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Email"
                            placeholder="Email"
                            input-classes="form-control-alternative"
                            v-model="user.email"
                            type="email"
                        />
                    </div>
                </div>        
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="type" class="form-control-label">Type</label>
                            <select class="form-control" name="type" id="type">
                                <option value="Admin">Admin</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Teacher">Teacher</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="University ID"
                            placeholder="University ID"
                            input-classes="form-control-alternative"
                            v-model="user.universityID"
                        >
                        </base-input>
                    </div>
                </div>        
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Password"
                            placeholder="Password"
                            input-classes="form-control-alternative"
                            v-model="user.password"
                            type="password"
                        />
                    </div>
                </div>        
            </template>
            <template #submit>
                <button @click="createUser" class="btn btn-success">Save</button>
            </template>
        </base-form>
    </div>
</template>

<script>
export default {
    name: 'new-user',
    data() {
        return {
            user:{}
        }
    },
    methods: {
        async createUser() {
            let user = await this.$store.dispatch('users/create', this.user);
            this.$notify({verticalAlign: 'bottom', horizontalAlign: 'right', message: `You have successfully created a new user, ${this.user.name}.`});
            this.$router.push({ name: 'view-user', params: {id: user._id}});
        }
    }
}
</script>
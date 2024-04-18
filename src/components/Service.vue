<template>
    <el-row style="padding-top: 5%;">
        <el-col :span="9" style="border-right: solid 1px #e53935;">
            <div style="text-align: right; display: inline-block; width: 95%; margin-top: 45%;">
                <span class="service-text-gradient" style="">
                    Deploy prompts as services
                </span>
            </div>
        </el-col>
        <el-col :span="15" style="padding-left: 3%; padding-right: 3%;">
            <el-row>
                <el-col :span="12" style="border: solid 1px lightgrey; border-radius: 1%;">
                    <div style="display: absolute; top: 0;">
                        <div style="text-align: center; cursor: pointer;" class="hover-background">
                            <div style="display: inline-block;">
                                <span style="font-size: 0.75rem;">Untitled</span>
                                <q-icon name="edit" size="0.75rem"
                                    style="margin-left: 10px; vertical-align: middle;"></q-icon>
                            </div>
                        </div>

                        <el-row>
                            <el-col :span="5" style="text-align: center">
                                <q-btn round :flat="true" style="background-color: #03dac6; margin-top: 40%;"
                                    icon="play_circle" size="12px"></q-btn>
                            </el-col>
                            <el-col :span="19">
                                <div>
                                    <span class="overflow-text" style="font-size: 14px; font-weight: 700;">
                                        <q-tooltip style="width: 20%;">
                                            Lorem ipsum dolor
                                            sit amet, consectetur adipiscing elit. Mauris
                                            convallis magna sapien, vel sollicitudin ipsum iaculis sit amet.
                                            Pellentesque
                                            venenatis
                                            sollicitudin accumsan. Nunc molestie, ipsum vel interdum eleifend, felis dui
                                            vestibulum
                                            ante, et tincidunt ipsum orci quis magna. Donec fermentum bibendum turpis,
                                            id
                                            dapibus
                                            purus porttitor non. Donec quis feugiat velit. Fusce in mauris tristique,
                                            consequat
                                            eros
                                            vitae, varius enim. Sed rhoncus eget risus tristique rutrum. Nunc at nisi at
                                            ante
                                            faucibus pretium. Nulla sit amet faucibus metus. Vivamus ut dolor molestie,
                                            mollis
                                            orci
                                            non, luctus magna. Morbi rhoncus, massa at condimentum rutrum, lorem augue
                                            consectetur
                                            eros, quis laoreet libero odio sed diam. Mauris semper lectus vitae lorem
                                            rutrum,
                                            elementum imperdiet lacus euismod.
                                        </q-tooltip>
                                        Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Mauris
                                        convallis magna sapien, vel sollicitudin ipsum iaculis sit amet. Pellentesque
                                        venenatis
                                        sollicitudin accumsan. Nunc molestie, ipsum vel interdum eleifend, felis dui
                                        vestibulum
                                    </span>
                                </div>

                                <div style="margin-top: 5%;">
                                    <div>
                                        <q-chip text-color="white" icon="lock" size="2em"
                                            style="background-color: #03dac6; font-size: 10px">
                                            Private Access
                                        </q-chip>
                                        <q-chip text-color="black" icon="data_object" size="2em"
                                            style="background-color: lightgrey; font-size: 10px">
                                            Character A
                                        </q-chip>
                                    </div>
                                    <div>
                                        <q-chip text-color="black" icon="data_object" size="2em"
                                            style="background-color: lightgrey; font-size: 10px">
                                            Character B
                                        </q-chip>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>

                        <div>
                            <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary"
                                inline-label>
                                <q-tab name="Deploy" label="Deploy" no-caps style="width: 30%" />
                                <q-tab name="Backend Model" icon="widgets" label="Backend Model" no-caps
                                    style="width: 40%" />
                                <q-tab name="Prompt" label="Prompt" no-caps style="width: 30%" />
                            </q-tabs>

                            <q-separator />

                            <q-tab-panels v-model="tab" animated>
                                <q-tab-panel style="padding-left: 0; padding-right: 0;" name="Deploy">
                                    <q-list
                                        style="width: 100%; border-bottom: 1px solid lightgrey; padding-bottom: 4%;">
                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section>
                                                <q-item-label style="font-weight: 700;">
                                                    Run service
                                                </q-item-label>
                                                <q-item-label caption>
                                                    Click to stop the service
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side><q-toggle v-model="toggleState" size="45px"
                                                    style="vertical-align: middle;" /></q-item-section>
                                        </q-item>
                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section>
                                                <q-item-label>
                                                    Public access
                                                </q-item-label>
                                                <q-item-label caption>
                                                    Allow unrestricted access to the service, and no longer require a
                                                    secret. Be careful as this may lead to misuse and increased usage.
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side><q-toggle toggle-indeterminate v-model="toggleState1"
                                                    size="45px" style="vertical-align: middle;"
                                                    disabled /></q-item-section>
                                        </q-item>
                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section>
                                                <q-item-label>
                                                    Track request-response
                                                </q-item-label>
                                                <q-item-label caption>
                                                    Record the request-response history of this service. This helps you
                                                    debug the service and understand how it's being used.
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side><q-toggle toggle-indeterminate v-model="toggleState2"
                                                    size="45px" style="vertical-align: middle;"
                                                    disabled /></q-item-section>
                                        </q-item>
                                    </q-list>

                                    <div style="padding-left: 20px; padding-right: 20px; padding-top: 10px;">
                                        <el-row>
                                            <el-col :span="10">
                                                Test your service with a custom input
                                            </el-col>
                                            <el-col :span="14" style="text-align: right;">
                                                <div class="affix-header-login-wrapper">
                                                    <q-icon name="file_upload" size="1.5rem"
                                                        style="margin-right: 5px; vertical-align: middle; color: grey"></q-icon>
                                                    <span style="font-size: 14px; font-weight: 500; color: grey">Upload
                                                        from
                                                        CSV</span>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <div>
                                            <q-input v-model="input1" label="characterA"
                                                hint="input value for variable:" />
                                        </div>
                                        <div>
                                            <q-input v-model="input2" label="characterB"
                                                hint="input value for variable:" />
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel style="padding-left: 0; padding-right: 0;" name="Backend Model">
                                    <q-list
                                        style="width: 100%; border-bottom: 1px solid lightgrey; padding-bottom: 4%;">
                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section>
                                                <q-item-label>
                                                    Backend Model
                                                </q-item-label>
                                                <q-item-label caption>
                                                    The model for running your prompt.
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side>
                                                <div class="affix-header-login-wrapper" @click="dropdownChange">
                                                    <q-icon name="widgets" size="1.5rem"
                                                        style="margin-right: 5px; vertical-align: middle; color: grey"></q-icon>
                                                    <q-icon id="service-dropdown-icon" name="arrow_drop_down"
                                                        size="1.5rem"
                                                        style="margin-right: 5px; vertical-align: middle; color: grey"></q-icon>
                                                </div>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>

                                    <q-card flat class="">
                                        <q-card-section>
                                            <div style="">Model Settings</div>
                                        </q-card-section>

                                        <q-card-section class="">
                                            <q-input v-model="text2" label="System prompt" />
                                        </q-card-section>
                                    </q-card>

                                    <q-list style="width: 100%; padding-bottom: 4%;">
                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section style="max-width: 50%;">
                                                <q-item-label>
                                                    temperature
                                                </q-item-label>
                                                <q-item-label caption>
                                                    What sampling temperature to use, between 0 and 2. Higher values
                                                    like 0.8 will make the output more random, while lower values like
                                                    0.2 will make it more focused and deterministic. We generally
                                                    recommend altering this or `top_p` but not both.
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side style="width: 50%;">
                                                <q-slider label marker-labels v-model="slider" :min="0" :max="2"
                                                    :step="0.1" color="#6200EE">
                                                    <template v-slot:marker-label-group="scope">
                                                        <div v-for="marker in scope.markerList" :key="marker.index"
                                                            :class="[`text-black-${2 + Math.ceil(marker.value / 2)}`, marker.classes]"
                                                            :style="marker.style" @click="model = marker.value">
                                                            <div v-if="marker.value == 0 || marker.value == 2">
                                                                {{ marker.value }}</div>
                                                        </div>
                                                    </template>
                                                </q-slider>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section style="max-width: 50%;">
                                                <q-item-label>
                                                    max_tokens
                                                </q-item-label>
                                                <q-item-label caption>
                                                    The maximum number of tokens to generate in the completion. The
                                                    token count of your prompt plus max_tokens
                                                    cannot exceed the model's context length. Most models have a context
                                                    length of 2048 tokens (except for the
                                                    newest models, which support 4096).
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side style="width: 50%;">
                                                <q-slider label marker-labels v-model="slider2" :min="0" :max="4096"
                                                    :step="1" color="#6200EE">
                                                    <template v-slot:marker-label-group="scope">
                                                        <div v-for="marker in scope.markerList" :key="marker.index"
                                                            :class="[`text-black-${2 + Math.ceil(marker.value / 2)}`, marker.classes]"
                                                            :style="marker.style" @click="model = marker.value">
                                                            <div v-if="marker.value == 0 || marker.value == 4096">
                                                                {{ marker.value }}</div>
                                                        </div>
                                                    </template>
                                                </q-slider>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section style="max-width: 50%;">
                                                <q-item-label>
                                                    top_p
                                                </q-item-label>
                                                <q-item-label caption>
                                                    An alternative to sampling with temperature, called nucleus
                                                    sampling, where the model considers the results
                                                    of the tokens with top_p probability mass. So 0.1 means only the
                                                    tokens comprising the top 10% probability
                                                    mass are considered. We generally recommend altering this or
                                                    `temperature` but not both.
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side style="width: 50%;">
                                                <q-slider label marker-labels v-model="slider3" :min="0" :max="1"
                                                    :step="0.1" color="#6200EE">
                                                    <template v-slot:marker-label-group="scope">
                                                        <div v-for="marker in scope.markerList" :key="marker.index"
                                                            :class="[`text-black-${2 + Math.ceil(marker.value / 2)}`, marker.classes]"
                                                            :style="marker.style" @click="model = marker.value">
                                                            <div v-if="marker.value == 0 || marker.value == 1">
                                                                {{ marker.value }}</div>
                                                        </div>
                                                    </template>
                                                </q-slider>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-ripple :active="false">
                                            <q-item-section style="max-width: 50%;">
                                                <q-item-label>
                                                    stream
                                                </q-item-label>
                                                <q-item-label caption>
                                                    Boolean. Whether to stream back partial progress. If set, tokens
                                                    will be sent as data-only server-sent
                                                    events as they become available.
                                                </q-item-label>
                                            </q-item-section>
                                            <q-item-section side style="width: 50%;">
                                                <q-toggle v-model="toggle" color="#6200EE" />
                                            </q-item-section>
                                        </q-item>
                                    </q-list>

                                    <el-row id="backend-model-btns" v-if="slider != 0 || slider2 != 0 || slider3 != 0 || toggle">
                                        <el-col :span="8" style="color: red; text-align: center; cursor: pointer; padding-left: 1%; padding-right: 1%;">
                                            <div id="reset-btn">
                                                <q-icon name="restart_alt" size="1.715rem"
                                                    style="vertical-align: middle;"></q-icon>
                                                <div>RESET TO DEFAULT</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="8" style="color: black; text-align: center; cursor: pointer; padding-left: 1%; padding-right: 1%;">
                                            <div id="cancel-btn">
                                                <q-icon name="cancel" size="1.715rem"
                                                    style="vertical-align: middle;"></q-icon>
                                                <div>CANCEL</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="8" style="color: #6200EE; text-align: center; cursor: pointer; padding-left: 1%; padding-right: 1%;">
                                            <div id="save-btn">
                                                <q-icon name="save" size="1.715rem"
                                                    style="vertical-align: middle;"></q-icon>
                                                <div>SAVE</div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </q-tab-panel>

                                <q-tab-panel name="Prompt">
                                    <el-row>
                                        <el-col :span="6" style="padding-left: 1%; border-right: solid 1px lightgrey;">
                                            <div class="affix-header-login-wrapper" style="text-align: left; padding: 0;">
                                                    <q-icon name="science" size="10px"
                                                        style="margin-right: 2px; vertical-align: middle; color: black"></q-icon>
                                                    <span style="font-size: 10px; font-weight: 500; color: black">Preview output</span>
                                            </div>
                                        </el-col>
                                        
                                        <el-col :span="14" style="padding-left: 3%; border-right: solid 1px lightgrey;">
                                            <div>
                                                <div class="affix-header-login-wrapper" style="text-align: left; padding: 0;">
                                                        <q-icon name="webhook" size="10px"
                                                            style="margin-right: 2px; vertical-align: middle; color: black"></q-icon>
                                                        <span style="font-size: 10px; font-weight: 500; color: black">Prompt as a service</span>
                                                        <q-icon id="service-dropdown-icon" name="arrow_drop_down" size="10px"
                                                            style="vertical-align: middle; color: black"></q-icon>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="affix-header-login-wrapper" style="text-align: left; padding: 0;">
                                                        <q-icon name="web" size="10px"
                                                            style="margin-right: 2px; vertical-align: middle; color: black"></q-icon>
                                                        <span style="font-size: 10px; font-weight: 500; color: black">Crawler</span>
                                                </div>
                                            </div>
                                        </el-col>

                                        <el-col :span="4" style="padding-left: 3%;">
                                            <span style="font-size: 10px; font-weight: 500; color: grey">117 words</span>
                                        </el-col>
                                    </el-row>

                                    <q-scroll-area style="height: 200px; max-width: 100%; margin-top: 3%;">
                                        <div class="text-black">
                                            Create a rap battle in the style of Wild 'N Out between [characterA] and [characterB]. Each participant should have three rounds to showcase their skills, with each round having a specific theme or topic (e.g., meme, lifestyle, pop culture). The lyrics should be clever, witty, and showcase your creativity while also being appropriate for all audiences.

                                            Please note that you should aim to make this an entertaining and engaging experience for both participants and any potential audience members. You may draw inspiration from existing rap battles but try to incorporate unique elements that highlight your individual strengths as rappers.
                                        </div>
                                    </q-scroll-area>

                                    <div class="horizontal" style="margin-top: 3%;">
                                        <span>Variables found:</span>
                                        <q-chip text-color="white" icon="data_object" size="2em"
                                            style="background-color: #6200EE; font-size: 10px">
                                            Character A
                                        </q-chip>
                                        <q-chip text-color="white" icon="data_object" size="2em"
                                            style="background-color: #6200EE; font-size: 10px">
                                            Character B
                                        </q-chip>
                                    </div>

                                    <div style="text-align: center; cursor: not-allowed; margin-top: 3%;">
                                        <div>
                                            <q-icon name="save" size="1.715rem"
                                                style="vertical-align: middle;"></q-icon>
                                            <div>SAVE</div>
                                        </div>
                                    </div>
                                </q-tab-panel>
                            </q-tab-panels>
                        </div>
                    </div>
                </el-col>

                <el-col :span="1" />

                <el-col :span="11" style="padding-top: 30%;">
                    <q-tabs v-model="tab2" dense class="text-black" active-color="primary" indicator-color="primary"
                        style="background-color: rgb(3, 218, 198);">
                        <q-tab name="CURL" label="CURL" />
                        <q-tab name="JAVASCRIPT" label="JAVASCRIPT" />
                        <q-tab name="PYTHON" label="PYTHON" />
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab2" animated style="background-color: #eceff1">
                        <q-tab-panel name="CURL">
                            <q-markdown :no-highlight="false" :no-line-numbers="false" show-copy>
                                ```shell
                                curl "https://api.promptperfect.jina.ai/example" \
                                -H "content-type: application/json" \
                                --data '{"parameters": {"characterA":"xxx","characterB":"xxx"}}'
                                ```
                            </q-markdown>
                        </q-tab-panel>

                        <q-tab-panel name="JAVASCRIPT">
                            <q-markdown :no-highlight="false" :no-line-numbers="false" show-copy>
                                ```js
                                resp = fetch('https://api.promptperfect.jina.ai/example', {
                                headers: {
                                'content-type': 'application/json'
                                },
                                body: JSON.stringify({
                                "parameters": {"characterA":"xxx","characterB":"xxx"},
                                }),
                                method: 'POST'
                                });
                                ```
                            </q-markdown>
                        </q-tab-panel>

                        <q-tab-panel name="PYTHON">
                            <q-markdown :no-highlight="false" :no-line-numbers="false" show-copy>
                                ```python
                                #!pip install requests
                                import requests

                                url = "https://api.promptperfect.jina.ai/example"

                                headers = {
                                "Content-Type": "application/json"
                                }

                                response = requests.post(url, headers=headers, json={
                                "parameters": {"characterA":"xxx","characterB":"xxx"}
                                })

                                print(response.json())
                                ```
                            </q-markdown>
                        </q-tab-panel>
                    </q-tab-panels>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import { ref } from 'vue';
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'
import '@quasar/quasar-ui-qmarkdown/dist/index.css'
export default {
    components: {
        QMarkdown,
    },
    setup() {
        let text = ref("");
        let text2 = ref("");
        let tab = ref("Deploy");
        let tab2 = ref("CURL")
        let toggleState = ref(true);
        let toggleState1 = ref(false);
        let toggleState2 = ref(false);
        let input1 = ref("");
        let input2 = ref("");
        let slider = ref(0);
        let slider2 = ref(0);
        let slider3 = ref(0);
        let toggle = ref(false);

        let status = ref(false);

        function dropdownChange(event) {
            if (!status.value) {
                document.getElementById('service-dropdown-icon').style.animation = "spin1 0.3s linear 1 normal forwards";
                status.value = true;
            } else {
                document.getElementById('service-dropdown-icon').style.animation = "spin2 0.3s linear 1 normal forwards";
                status.value = false;
            }
        }
        return { text, text2, tab, tab2, toggleState, toggleState1, toggleState2, input1, input2, status, slider, slider2, slider3, toggle, dropdownChange }
    }
}
</script>

<style scoped>
.service-text-gradient {
    background-image: linear-gradient(45deg, #ffc107 25%, rgb(3, 218, 198));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-family: IconFont;
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal;
}

.hover-background {
    transition: 0.3s;
}

.hover-background:hover {
    background-color: lightgrey;
}

.overflow-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

#reset-btn {
    transition: 0.3s;
}
#reset-btn:hover {
    background-color: coral;
}

#cancel-btn {
    transition: 0.3s;
}
#cancel-btn:hover {
    background-color: grey;
}

#save-btn {
    transition: 0.3s;
}
#save-btn:hover {
    background-color: lightblue;
}
</style>
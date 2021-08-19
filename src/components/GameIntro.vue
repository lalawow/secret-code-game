<template>
    <div>
        <div class="text-white">
            <n-button text class="text-white" @click="showModal = true">
                <template #icon>
                    <n-icon>
                        <question />
                    </n-icon>
                </template>
                游戏说明
            </n-button>
        </div>
        <n-modal
            v-model:show="showModal"
            preset="card"
            :bordered="false"
            size="huge"
            title="游戏说明"
            style="width: 600px;"
        >
            <div>
                <p>猜密码，密码由不同颜色的小狗代表。已知密码的长度，需要猜出正确的小狗颜色的顺序。</p>
                <p>密码可以有重复的颜色，不会有空着的颜色。猜的时候也不能空着位置。</p>
                <p>每次猜完后，游戏会告诉你有几个小狗是颜色和位置都对，此外有几个小狗是颜色对但是位置不对，剩下几只小狗颜色都不对。</p>
                <p>看谁猜得快，所用的次数最少！祝你好运！</p>
            </div>
        </n-modal>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { NButton, NIcon, NModal, NCard } from "naive-ui"
import { QuestionCircleRegular as Question } from "@vicons/fa"

const showModal = ref(false);
</script>

<style>
</style>
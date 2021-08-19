<template>
  <div>
    <div v-show="!state.inGame" class="flex justify-center">
      <div class="p-2">
        <n-button type="primary" @click="handleInGame">开始游戏</n-button>
      </div>
      <div class="p-2">
        <n-button type="primary" @click="showModal = true">设置</n-button>
        <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
          <template #header>
            <div>游戏设置</div>
          </template>
          <div>
            <n-form
              ref="formRef"
              label-placement="left"
              :label-width="160"
              :style="{
                maxWidth: '640px',
              }"
            >
              <n-form-item label="密码长度">
                <n-slider
                  :defaultValue="state.puzzleLength"
                  :step="1"
                  :min="1"
                  :max="8"
                  :on-update:value="setPuzzleLength"
                />
              </n-form-item>
              <n-form-item label="颜色数量">
                <n-slider
                  :defaultValue="state.colorSize"
                  :step="1"
                  :min="1"
                  :max="8"
                  :on-update:value="setColorSize"
                />
              </n-form-item>
            </n-form>
          </div>
          <template #action>
            <n-button type="primary" @click="showModal = false">关闭</n-button>
          </template>
        </n-modal>
      </div>
    </div>
    <div v-show="state.inGame">
      <div class="p-2">
        <n-button type="error" @click="handleInGame">结束游戏</n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NButton, NModal, NForm, NFormItem, NSlider } from "naive-ui";
import store from "../store";
import { genPuzzle } from "../libs/utils";

const { state } = store;

const showModal = ref(false);
const handleInGame = () => {
  if (!state.inGame) {
    const { colorSize, puzzleLength } = state;
    const newPuzzle = genPuzzle({ colorSize, puzzleLength });
    store.setPuzzle(newPuzzle);
    state.startAt = Date.now();
  }
  store.setInGame(!state.inGame);
};

const setPuzzleLength = (value) => {
  state.puzzleLength = value;
};

const setColorSize = (value) => {
  state.colorSize = value;
};
</script>

<template>
  <div>
    <p>{{ $t("message.hello") }}</p>
    <p>{{ $t("message.welcome") }}</p>
    <button @click="switchLanguage">切换语言</button>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const currentLanguage = ref("zh-CN");
    const { locale, t } = useI18n();
    const switchLanguage = () => {
      currentLanguage.value =
        currentLanguage.value === "zh-CN" ? "en-US" : "zh-CN";
      // 切换语言
      locale.value = currentLanguage.value;
    };

    return {
      switchLanguage,
    };
  },
};
</script>
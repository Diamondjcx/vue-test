import { defineComponent } from "vue";
import { NButton } from "naive-ui";
export default defineComponent({
  name: "myButton",
  extends: NButton,
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  setup(props, context) {
    console.log(props.type);
    // console.log(context.attrs)
    // console.log(context.slots)
    // console.log(context.emit)
    return {
      props,
      context,
    };
  },
  template: `
  <n-button v-bind="$attrs" :type="props.type" v-on="$listeners">
    <slot></slot>
  </n-button>
  `,
});

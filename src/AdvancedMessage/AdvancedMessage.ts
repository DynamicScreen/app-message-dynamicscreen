import {
  ISlideContext,
  IPublicSlide,
  SlideModule, VueInstance
} from "dynamicscreen-sdk-js";
import {COLOR_CLASSES, ColorClasses} from "../SimpleMessage/SimpleMessage";

export default class AdvancedMessageSlideModule extends SlideModule {
  constructor(context: ISlideContext) {
    super(context);
  }

  async onReady() {
    return true;
  };

  setup(props: Record<string, any>, vue: VueInstance, context: ISlideContext) {
    const { h, reactive, computed, ref } = vue;

    const slide = reactive(this.context.slide) as IPublicSlide;

    const bgColor = computed(() => {
      if (slide.data.background_color)
        return COLOR_CLASSES[slide.data.background_color as keyof ColorClasses];
    })
    const title = ref(slide.data.title)
    const message = ref(slide.data.message)

    this.context.onPlay(async () => {
      this.context.anime({
        targets: "#title",
        translateY: [80, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'linear'
      });
      this.context.anime({
        targets: "#message",
        translateY: [80, 0],
        opacity: [0, 1],
        duration: 500,
        delay: 300,
        easing: 'linear'
      });
      console.log("ON PLAY CALLED")
    });

    this.context.onEnded(async () => {
    });

    return () =>
      h("div", {
        class: 'h-full w-full flex flex-col justify-center items-center bg-' + bgColor.value
      }, [
        h("div", {
          class: "font-sans w-1/2 text-6xl mb-16 font-bold text-white text-center",
          id: "title"
        }, title.value),

        h("div", {
          class : "message font-sans w-1/2 text-5xl font-bold text-white text-center opacity-0",
          id: "message"
        }, message.value)
      ])
  }
}

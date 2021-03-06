import {
  ISlideOptionsContext,
  SlideOptionsModule, VueInstance,
} from "dynamicscreen-sdk-js";

export default class AdvancedMessageOptionsModule extends SlideOptionsModule {
    constructor(context: ISlideOptionsContext) {
        super(context);
    }

    async onReady() {
        return true;
    };

    setup(props: Record<string, any>, vue: VueInstance, context: ISlideOptionsContext) {
        const { h } = vue;

      const update = context.update;
      const { Field, TextInput, ColorPicker } = this.context.components;

      return () =>
        h("div", {}, [
            h(Field, { label: this.t('modules.advanced-message.options.title') }, [
              h(TextInput, {...update.option("title") })
            ]),
            h(Field, { label: this.t('modules.advanced-message.options.message') }, [
              h(TextInput, {...update.option("message") })
            ]),
            h(Field, { label: this.t('modules.advanced-message.options.color') }, [
              h(ColorPicker, {...update.option("background_color") })
            ]),
          ]
        )
    }
}

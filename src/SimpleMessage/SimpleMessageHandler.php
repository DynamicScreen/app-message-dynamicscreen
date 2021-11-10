<?php

namespace DynamicScreen\Message\SimpleMessage;

use App\Domain\Module\Model\Module;
use DynamicScreen\SdkPhp\Handlers\SlideHandler;
use DynamicScreen\SdkPhp\Interfaces\ISlide;

class SimpleMessageHandler extends SlideHandler
{
    public function __construct(Module $module)
    {
        parent::__construct($module);
    }

    public function fetch(ISlide $slide): void
    {
        $default = $this->getDefaultOptions();

        $this->addSlide([
            'title' => $slide->getOption('title', $default['title']),
            'message' => $slide->getOption('message', $default['message']),
            'background_color' => $slide->getOption('background_color', $default['background_color']),
        ]);
    }

    public function getDefaultOptions(): array
    {
        return [
            'title' => '',
            'message' => '',
            'background_color' => 'blue'
        ];
    }
}

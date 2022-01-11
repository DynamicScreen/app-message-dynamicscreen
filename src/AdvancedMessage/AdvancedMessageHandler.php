<?php

namespace DynamicScreen\Message\AdvancedMessage;

use DynamicScreen\SdkPhp\Handlers\SlideHandler;
use DynamicScreen\SdkPhp\Interfaces\ISlide;

class AdvancedMessageHandler extends SlideHandler
{
    public function fetch(ISlide $slide): void
    {
        $this->addSlide([
            'title' => $slide->getOption('title', ""),
            'message' => $slide->getOption('message', ""),
            'background_color' => $slide->getOption('background_color', "blue"),
        ]);
    }
}

"use strict";

function LocalizeText(data)
{
	var string_output = $.Localize(data.string)
	var output_data = {
		string: string_output,
		priority: data.priority,
	}
	GameEvents.SendCustomGameEventToServer("ReciveLocalizeText", output_data );
}

function DebugPrintData(data)
{
	var msg = data.msg

	$.Msg("[DEBUG]" + msg)
}

(function()
{
	GameEvents.Subscribe( "DebugMessage", DebugPrintData)
})();
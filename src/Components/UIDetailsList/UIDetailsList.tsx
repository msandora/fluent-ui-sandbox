import * as React from 'react';
import { FunctionComponent } from 'react';
import { tableStyles } from './UIDetailsList.styles'
// Fluent UI
import { ScrollablePane, ScrollbarVisibility } from '@fluentui/react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { Selection } from '@fluentui/react/lib/DetailsList';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';

interface IUIDetailsListProps {
    commandBar: ICommandBarItemProps[],
    commandBarFarItems?: ICommandBarItemProps[],
}

const UIDetailsList: FunctionComponent<IUIDetailsListProps> = (props) => {
    return (
        <div className={tableStyles.details_list}>
            <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                <Sticky stickyPosition={StickyPositionType.Header}>
                    <CommandBar
                        items={props.commandBar}
                        farItems={props.commandBarFarItems}
                    />
                </Sticky>
                <MarqueeSelection selection={new Selection()}>
                    {props.children}
                </MarqueeSelection>
            </ScrollablePane>
        </div>
    );
};


export default UIDetailsList;
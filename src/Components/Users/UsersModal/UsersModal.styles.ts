import { FontWeights } from "@fluentui/react";
import { IComponentUserModalStyleProps, IComponentUserModalStyles } from './UsersModal.types';

export const styles = (props: IComponentUserModalStyleProps): IComponentUserModalStyles => {
    const {
        theme,
    } = props;

    return ({
        root: [
            {
                display: 'flex',
                borderTop: '4px solid ' + theme.palette.themeDark,
                flexFlow: 'column nowrap',
                alignItems: 'stretch',
                height: 'auto',
                minWidth: '400px',
                maxWidth: '1000px',
            },
        ],
        header: [
            // tslint:disable-next-line:deprecation
            theme.fonts.xLargePlus,
            {
                flex: '1 1 auto',
                color: theme.palette.neutralPrimary,
                display: 'flex',
                alignItems: 'center',
                fontWeight: FontWeights.semibold,
                maxHeight: 65,
                height: 65,
                padding: '0 20px',
            },
        ],
        actions: [
            {
                position: 'absolute',
                right: '20px'
            },
        ],
        content: {
            height: 'auto!important',
            maxHeight: 'calc(82vh - 160px) !important',
            overflowY: 'auto',
            padding: '0 20px 20px 20px',
        },
        footer: {
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            maxHeight: 60,
            height: 60,
            padding: '0 20px',
        },
    })
}

export const dialogGap = {
    childrenGap: 10
};

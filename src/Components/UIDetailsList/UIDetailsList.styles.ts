import { mergeStyleSets, getTheme } from '@fluentui/react/lib/Styling';

const theme = getTheme();

export const tableStyles = mergeStyleSets({
    details_list: {
        height: 'calc(100vh - 44px)',
        position: 'relative',
        margin: '0 25px',
        backgroundColor: theme.palette.white,
    }
});

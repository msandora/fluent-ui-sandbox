import { ILayoutStyleProps, ILayoutStyles } from './Layout.types';

export const styles = (props: ILayoutStyleProps): ILayoutStyles => {
    const { theme } = props;
    return {
        container: [
            {
                display: 'flex',
                //width: '100%',
                height: 'calc(100vh - 45px)',
            },
        ],
        sidebar: [
            {
                maxWidth: 280,
                overflowY: 'auto',
                //borderRight: '1.5px solid ' + theme.palette.white,
                backgroundColor: theme.palette.themeDarker,
            },
        ],
        content: [
            {
                padding: '0 25px',
                backgroundColor: theme.palette.white,
            }
        ],
    };
};

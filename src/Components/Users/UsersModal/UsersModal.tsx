import * as React from 'react';
import { useState, useEffect } from 'react';
// Fluent Ui
import { Modal } from '@fluentui/react/lib/Modal';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { Fabric } from '@fluentui/react/lib/Fabric';

//Custom CSS
import { styles, dialogGap } from './UsersModal.styles';
import { IComponentUserModalStyleProps, IComponentUserModalStyles, IUserModalProps } from './UsersModal.types';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';
import { getTheme } from '@fluentui/react';

const getClassNames = classNamesFunction<IComponentUserModalStyleProps, IComponentUserModalStyles>();
const theme = getTheme();


const UserModal = (props: IUserModalProps) => {

    const [user, setUser] = useState(props.user);

    useEffect(() => setUser(props.user), [props.user]);

    const classNames = getClassNames(styles, { theme });

    function handleOnSubmit(e: React.FormEvent) {
        e.preventDefault();
        props.onSubmit(user);
    }

    return (
        <Fabric>
            <Modal
                isOpen={props.show}
                onDismiss={props.onClose}
                isBlocking={true}
                dragOptions={{
                    moveMenuItemText: 'Move',
                    closeMenuItemText: 'Close',
                    menu: ContextualMenu
                }}
            >
                <form onSubmit={handleOnSubmit}>
                    <Stack className={classNames.root}>
                        <Stack.Item className={classNames.header}>
                            <span>Assign User</span>
                        </Stack.Item>
                        <Stack.Item className={classNames.content}>

                            <TextField label="Name" required value={user.name}
                                onChange={(e: any, newValue?: string) => {
                                    const state = { ...user, name: newValue || "" };
                                    setUser(state);
                                }}
                                name="name"
                            />
                            <TextField label="Email" required value={user.email}
                                onChange={(e: any, newValue?: string) => {
                                    const state = { ...user, email: newValue || "" };
                                    setUser(state);
                                }}
                                name="email"
                            />
                            <TextField label="Phone" 
                                onChange={(e: any, newValue?: string) => {
                                    const state = { ...user, phone: newValue || "" };
                                    setUser(state);
                                }}
                                name="phone"
                            />
                        </Stack.Item>
                        <Stack.Item className={classNames.footer}>
                            <Stack horizontal tokens={dialogGap} className={classNames.actions}>
                                <PrimaryButton type="submit">Save User</PrimaryButton>
                                <DefaultButton onClick={props.onClose}>Close</DefaultButton>
                            </Stack>
                        </Stack.Item>
                    </Stack>
                </form>
            </Modal>
        </Fabric>
    );
}

export default UserModal;
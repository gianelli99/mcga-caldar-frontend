import React from 'react';
import { GenericModal } from '../shared/GenericModal';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/lab/LoadingButton';
import {
  deleteBuildingsAsync,
  unsetAction,
} from '../../redux/actions/buildingsAction';
import styles from './ConfirmDelete.module.css';
import { ErrorContainer } from '../shared/ErrorContainer';

export const ConfirmDelete = ({ building }) => {
  const dispatch = useDispatch();
  const { isLoading, error, selectedBuilding } = useSelector(
    (state) => state.buildings
  );
  building = selectedBuilding;
  const handleCancel = () => dispatch(unsetAction());
  const handleDelete = () => dispatch(deleteBuildingsAsync(building.id));

  return (
    <GenericModal>
      <>
        <h2>You are about to delete a Building</h2>
        {error && <ErrorContainer message={error} />}
        <p>{`This will delete "${building.name}" (Direction: ${building.direction}) permanently`}</p>
        <p>Are you sure?</p>
        <div className={styles.actionsContainer}>
          <Button
            onClick={handleDelete}
            variant="contained"
            disableRipple
            color="error"
            loading={isLoading}
          >
            Delete
          </Button>
          <Button onClick={handleCancel} variant="outlined" disableRipple>
            Cancel
          </Button>
        </div>
      </>
    </GenericModal>
  );
};

ConfirmDelete.propTypes = {
  building: PropTypes.object.isRequired,
};

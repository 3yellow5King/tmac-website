// External Dependencies
import React, { FC } from 'react';

// Internal Dependencies
import {
  HandleCompleteMemberStepType,
  MemberFormValues,
} from '../../pages/members/register';
import FormHr from '../shared/form-hr';
import RegisterForm from './register-member-form';

// Local Typings
interface Props {
  authenticatedUserId?: string;
  initialMemberFormValues: MemberFormValues;
  onCompleteMemberStep: HandleCompleteMemberStepType;
}

// Component Definition
const MemberFormValuesWrapper: FC<Props> = ({
  authenticatedUserId,
  initialMemberFormValues,
  onCompleteMemberStep,
}) => {
  if (!authenticatedUserId) {
    return null;
  }

  return (
    <section>
      <h2>
        2. Join TMAC
      </h2>

      <FormHr />

      <RegisterForm
        authenticatedUserId={authenticatedUserId}
        initialMemberFormValues={initialMemberFormValues}
        onCompleteMemberStep={onCompleteMemberStep}
      />
    </section>
  );
};

export default MemberFormValuesWrapper;

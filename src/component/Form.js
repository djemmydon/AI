


export function Form1({ userInfo, handleChange }) {
  console.log(userInfo);

  return (
    <>
      <div className="asp">
        <div className="form_input">
          <label> First Name</label>
          <input
            type="text"
            name="first_name"
            value={userInfo.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Last Name</label>

          <input
            type="text"
            name="last_name"
            value={userInfo.last_name}
            onChange={handleChange}
          />
        </div>

        <div className="form_input">
          <label>Middle Name</label>

          <input
            type="text"
            name="middle_name"
            value={userInfo.middle_name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input">
          <label>Street Address</label>
          <input
            type="text"
            name="street_address"
            placeholder="
        Street Address"
            value={userInfo.street_address}
            onChange={handleChange}
          />
        </div>

        <div className="form_input">
          <label> Address</label>

          <input
            type="text"
            name="apartment_unit"
            placeholder="Apartment/Unit #"
            value={userInfo.apartment_unit}
            onChange={handleChange}
          />
        </div>

        <div className="form_input">
          <label> City</label>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={userInfo.city}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label> State</label>

          <input
            type="text"
            name="state"
            placeholder="State"
            value={userInfo.state}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="
       Phone Number"
            value={userInfo.city}
            onChange={handleChange}
          />
        </div>

        <div className="form_input">
          <label> Email</label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input">
          <label> Date Available</label>

          <input
            type="date"
            name="date_available"
            placeholder="Date Available"
            value={userInfo.date}
            onChange={handleChange}
          />
        </div>

        <div className="form_input">
          <label> Social Security No</label>

          <input
            type="text"
            name="social_security_no"
            placeholder="Social Security No"
            value={userInfo.social_security_no}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label>Desired Salary</label>

          <input
            type="text"
            name="desired_salary"
            placeholder="Desired Salaray"
            value={userInfo.desired_salary}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input txt">
          <label>Position Applied for</label>
          <input
            type="text"
            name="postion_applied_for"
            placeholder="Position Applied for"
            className="appluied"
            value={userInfo.postion_applied_for}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_check">
          <label>Are you a citizen of the United States?</label>

          <div className="check_body">
            <div>
              <select
                name="citizen_of_united_state"
                value={userInfo.citizen_of_united_state}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form_check">
          <label>If no, are you authorized to work in the U.S.?</label>

          <div className="check_body">
            <div>
              <select
                name="autorized_to_work"
                value={userInfo.autorized_to_work}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="asp">
        <div className="form_check">
          <label>Have you ever been convicted of a felony?</label>

          <div className="check_body">
            <div>
              <select
                name="have_you_been_convited_of_a_felony"
                value={userInfo.have_you_been_convited_of_a_felony}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form_input">
          <label>If yes, explain?</label>

          <div>
            <input
              type="text"
              name="yes_have_you_been_convited_of_a_felony"
              value={userInfo.yes_have_you_been_convited_of_a_felony}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function Form2({ userInfo, handleChange }) {
  return (
    <>
      <div className="asp">
        <div className="form_input">
          <label> High School</label>
          <input
            type="text"
            name="high_school"
            value={userInfo.high_school}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Address</label>

          <input
            type="text"
            name="high_school_address"
            value={userInfo.high_school_address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label> From</label>
          <input
            type="date"
            name="high_school_from"
            value={userInfo.high_school_from}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> To</label>

          <input
            type="date"
            name="high_school_to"
            value={userInfo.high_school_to}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_check">
          <label>Did you graduate?</label>

          <div className="check_body">
            <div>
              <select
                name="did_you_graduate_high_school"
                value={userInfo.did_you_graduate_high_school}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <div></div>
            </div>
          </div>
        </div>

        <div className="form_input">
          <label>Degree</label>

          <div>
            <input
              type="text"
              name="degree"
              value={userInfo.degree}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="asp">
        <div className="form_input">
          <label> College School</label>
          <input
            type="text"
            name="college_school"
            value={userInfo.college_school}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Address</label>

          <input
            type="text"
            name="college_address"
            value={userInfo.college_address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label> From</label>
          <input
            type="date"
            name="college_school_from"
            value={userInfo.college_school_from}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> To</label>

          <input
            type="date"
            name="college_school_to"
            value={userInfo.college_school_to}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_check">
          <label>Did you graduate?</label>

          <div className="check_body">
            <div>
              <select
                name="did_you_graduate_college"
                value={userInfo.did_you_graduate_college}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form_input">
          <label>Diploma</label>

          <div>
            <input
              type="text"
              name="diploma"
              value={userInfo.diploma}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function Form3({ userInfo, handleChange }) {
  return (
    <>
      <div className="asp">
        <div className="form_input">
          <label> Full Name</label>
          <input
            type="text"
            name="refeerence1_full_name"
            value={userInfo.refeerence1_full_name}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Relationship</label>

          <input
            type="text"
            name="refeerence1_relationship"
            value={userInfo.refeerence1_relationship}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label>Campany</label>
          <input
            type="text"
            name="refeerence1_conmpany"
            value={userInfo.refeerence1_conmpany}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Phone</label>

          <input
            type="text"
            name="refeerence1_phone"
            value={userInfo.refeerence1_phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input txt">
          <label> Adress</label>
          <input
            type="text"
            name="refeerence1_full_address"
            value={userInfo.refeerence1_full_address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label> Full Name</label>
          <input
            type="text"
            name="refeerence2_full_name"
            value={userInfo.refeerence2_full_name}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Relationship</label>

          <input
            type="text"
            name="refeerence2_relationship"
            value={userInfo.refeerence2_relationship}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label>Campany</label>
          <input
            type="text"
            name="refeerence2_company"
            value={userInfo.refeerence2_company}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Phone</label>

          <input
            type="text"
            name="refeerence2_phone"
            value={userInfo.refeerence2_phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input txt">
          <label> Adress</label>
          <input
            type="text"
            name="refeerence2_full_address"
            value={userInfo.refeerence2_full_address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label> Full Name</label>
          <input
            type="text"
            name="refeerence3_full_name"
            value={userInfo.refeerence3_full_name}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Relationship</label>

          <input
            type="text"
            name="refeerence3_relationship"
            value={userInfo.refeerence3_relationship}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input">
          <label>Campany</label>
          <input
            type="text"
            name="refeerence3_conmpany"
            value={userInfo.refeerence3_conmpany}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Phone</label>

          <input
            type="text"
            name="refeerence3_phone"
            value={userInfo.refeerence3_phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input txt">
          <label> Adress</label>
          <input
            type="text"
            name="refeerence3_full_address"
            value={userInfo.refeerence3_full_address}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export function Form4({ userInfo, handleChange }) {
  return (
    <>
      <div className="asp">
        <div className="form_input">
          <label>Campany</label>
          <input
            type="text"
            name="prev_enployment_conmpany"
            value={userInfo.prev_enployment_conmpany}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Phone</label>

          <input
            type="text"
            name="prev_enployment_phone"
            value={userInfo.prev_enployment_phone}
            onChange={handleChange}
          />
        </div>

        <div className="form_input">
          <label> Supervisor</label>

          <input
            type="text"
            name="prev_enployment_supervisor"
            value={userInfo.prev_enployment_supervisor}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input txt">
          <label>Address</label>
          <input
            type="text"
            name="prev_enployment_address"
            value={userInfo.prev_enployment_address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input">
          <label>Job Title</label>
          <input
            type="text"
            name="prev_enployment_job_title"
            value={userInfo.prev_enployment_job_title}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Starting Salary </label>

          <input
            type="text"
            name="prev_enployment_starting_salary"
            value={userInfo.prev_enployment_starting_salary}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Ending Salary </label>

          <input
            type="text"
            name="prev_enployment_Ending_salary"
            value={userInfo.prev_enployment_Ending_salary}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input">
          <label> From</label>
          <input
            type="date"
            name="prev_enployment_from"
            value={userInfo.prev_enployment_from}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> To</label>

          <input
            type="date"
            name="prev_enployment_to"
            value={userInfo.prev_enployment_to}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> Reason for Leaving</label>

          <input
            type="text"
            name="reason_for_leaving"
            value={userInfo.prev_enployment_to}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_check">
          <label>
            May we contact your previous supervisor for a reference?
          </label>

          <div className="check_body">
            <select
              name="contact_your_prev_supervisor_for_a_reference"
              value={userInfo.contact_your_prev_supervisor_for_a_reference}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export function Form5({ userInfo, handleChange }) {
  return (
    <>
      <div className="asp">
        <div className="form_input">
          <label>Branch</label>
          <input
            type="text"
            name="military_service_branch"
            value={userInfo.military_service_branch}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> From</label>

          <input
            type="date"
            name="military_service_from"
            value={userInfo.military_service_from}
            onChange={handleChange}
          />
        </div>
        <div className="form_input">
          <label> To</label>

          <input
            type="date"
            name="military_service_to"
            value={userInfo.military_service_to}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input txt">
          <label>Rank at Discharge</label>
          <input
            type="text"
            name="military_service_rank"
            value={userInfo.military_service_rank}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="asp">
        <div className="form_input txt">
          <label> Type of Discharge</label>

          <input
            type="text"
            name="military_service_type_of_discharge"
            value={userInfo.military_service_type_of_discharge}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="asp">
        <div className="form_input txt">
          <label>If other than honorable, explain</label>
          <input
            type="text"
            name="other_than_honorable"
            value={userInfo.other_than_honorable}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export function Form6({ userInfo, handleChange }) {
  return (
    <>
      <div className="asp">
        <div className="form_input ">
          <p>
            I certify that my answers are true and complete to the best of my
            knowledge.
          </p>
          <p>
            If this application leads to employment, I understand that false or
            misleading information in my application or interview may result in
            my release
          </p>
          <label>Do you accept your application</label>
          <input
            type="text"
            name="accept"
            value={userInfo.accept}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

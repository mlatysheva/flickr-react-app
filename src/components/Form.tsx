import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ThemeContext } from './Theme';

interface IFormProps {
  EmptyObject?: Record<string, unknown>;
  onSubmit?: (candidate: IFormCard, e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormCard {
  id?: string;
  country: string;
  date?: number;
  isRatified?: boolean;
  approvalStatus?: string;
  flag_local: string;
  continent: string;
  population: number;
  gdp: number;
}

function Form(props: IFormProps) {
  const theme = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm<IFormCard>({
    mode: 'onChange',
  });

  const [image, setImage] = useState('');

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const onSubmit = handleSubmit((data) => {
    const countryToAdd = {
      countryId: Date.now(),
      country: data.country,
      flag_local: image,
      continent: data.continent,
      population: data.population,
      gdp: data.gdp,
    };
    alert(`You've added the following details:
      Country: ${data.country};
      Continent: ${data.continent};
      Date of Application: ${data.date};
      Population: ${data.population};
      GDP: ${data.gdp};
      Ratified: ${data.isRatified};
      Status of Approval: ${data.approvalStatus};
      Uploaded Image: ${image}`);

    if (props.onSubmit) {
      props.onSubmit(countryToAdd);
    }
    reset();
  });

  return (
    <div className="main-form">
      <h2 className="form-title">To apply for the membership in G20, fill in the form below</h2>
      <form className="form-container" onSubmit={onSubmit}>
        <h3>Details of the new G20 candidate country:</h3>
        <fieldset>
          <p className="form-entry">
            <label htmlFor="country">Country</label>
            <input
              {...register('country', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Country name should have at least 3 characters',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Country name may have only Latin characters',
                },
              })}
              className="form-input-field"
              type="text"
              placeholder="Enter country"
            />
            {errors.country && <span className="error-message">{errors.country.message}</span>}
          </p>
          <p className="form-entry">
            <label htmlFor="continent">Continent</label>
            <select
              {...register('continent', { required: true })}
              className="form-input-field"
              placeholder="Select continent"
            >
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
            </select>
          </p>
          <p>
            <label htmlFor="date">Date</label>
            <input
              {...register('date', { required: true })}
              className="form-input-field"
              type="date"
            />
            {errors.date && errors.date.type === 'required' && (
              <span className="error-message">Fill in the date</span>
            )}
          </p>
          <p>
            <label htmlFor="population">Population, mln</label>
            <input
              {...register('population', {
                required: true,
                min: { value: 10, message: 'Population should be at least 10 mln' },
              })}
              className="form-input-field"
              type="number"
            />
          </p>
          {errors.population && <span className="error-message">{errors.population.message}</span>}
          <p>
            <label htmlFor="gdp">GDP, bln $</label>
            <input
              {...register('gdp', {
                required: true,
                min: { value: 90, message: 'GDP should be at least 90 bln' },
              })}
              className="form-input-field"
              type="number"
            />
          </p>
          {errors.gdp && <span className="error-message">{errors.gdp.message}</span>}
          <div className="checkbox-wrapper">
            <label className="subtitle" htmlFor="ratified">
              Ratified the Treaty
            </label>
            <input
              {...register('isRatified')}
              className="checkbox-field"
              type="checkbox"
              defaultChecked={false}
            />
          </div>
          <p className="subtitle">Approval status:</p>
          <div className="radio-container">
            <div className="radio-wrapper">
              <input
                {...register('approvalStatus', { required: true })}
                className="radio-checkbox"
                type="radio"
                id="filed"
                value="Documents filed"
              />
              <label className="smaller-font" htmlFor="filed">
                Documents filed
              </label>
            </div>
            <div className="radio-wrapper">
              <input
                {...register('approvalStatus', { required: true })}
                className="radio-checkbox"
                type="radio"
                id="pending"
                value="Approval pending"
              />
              <label className="smaller-font" htmlFor="pending">
                Approval pending
              </label>
            </div>
            <div className="radio-wrapper">
              <input
                {...register('approvalStatus', { required: true })}
                className="radio-checkbox"
                type="radio"
                id="approve"
                value="Approved"
              />
              <label className="smaller-font" htmlFor="approved">
                Approved
              </label>
            </div>
          </div>
          <p>
            <label htmlFor="flag_upload">Upload image of flag</label>
            <input
              {...register('flag_local')}
              className="file-upload-field"
              type="file"
              onChange={onImageChange}
            />
            <img src={image || ''} width="200" />
          </p>
        </fieldset>
        <button
          style={{ background: theme.state.background, color: theme.state.foreground }}
          className="submit-form-button"
          type="submit"
          disabled={!formState.isValid}
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { Form };

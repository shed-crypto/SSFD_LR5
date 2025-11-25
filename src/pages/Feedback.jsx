import React, { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', age: '',
    education: 'full',
    interests: { scientist: false, investor: false, promoter: false, civil: false },
    goal: 'cooperation',
    details: '',
    consent: false
  });

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: { ...prev.interests, [name]: checked }
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'consent') {
      setFormData({ ...formData, consent: checked });
    } else if (type !== 'checkbox') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.consent) { alert("Будь ласка, надайте згоду."); return; }
    console.log(formData);
    alert("Дані відправлено!");
  };

  const handleClear = () => {
    setFormData({
      name: '', email: '', age: '', education: 'full',
      interests: { scientist: false, investor: false, promoter: false, civil: false },
      goal: 'cooperation', details: '', consent: false
    });
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Зворотній зв'язок</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        {/* Група 1: Персональна інформація [cite: 269] */}
        <fieldset className="fieldset-group">
          <legend className="legend-title">Персональна інформація</legend>
          
          <div className="form-group">
            <label>Прізвище та ім'я:</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Вік:</label>
            <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Освіта:</label>
            <select name="education" className="form-control" value={formData.education} onChange={handleChange}>
              <option value="full">Повна</option>
              <option value="incomplete">Неповна</option>
              <option value="higher">Вища</option>
              <option value="professional">Професійна</option>
            </select>
          </div>

          <div className="form-group">
            <label>Інтереси:</label>
            <div className="checkbox-group">
              <label className="checkbox-label"><input type="checkbox" name="scientist" checked={formData.interests.scientist} onChange={handleCheckbox} /> Науковець</label>
              <label className="checkbox-label"><input type="checkbox" name="investor" checked={formData.interests.investor} onChange={handleCheckbox} /> Інвестор</label>
              <label className="checkbox-label"><input type="checkbox" name="promoter" checked={formData.interests.promoter} onChange={handleCheckbox} /> Промоутер</label>
              <label className="checkbox-label"><input type="checkbox" name="civil" checked={formData.interests.civil} onChange={handleCheckbox} /> Держслужбовець</label>
            </div>
          </div>
        </fieldset>

        <div className="form-group">
          <label>Мета зворотнього зв'язку:</label>
          <select name="goal" className="form-control" value={formData.goal} onChange={handleChange}>
            <option value="cooperation">Співпраця</option>
            <option value="complaint">Скарга на порушення права власності</option>
            <option value="proposal">Пропозиція</option>
            <option value="error">Наявність помилки</option>
          </select>
        </div>

        {/* Лаб 4: Тултіп при наведенні */}
        <div className="form-group detail-group" style={{position: 'relative'}}>
          <label>Детально:</label>
          <textarea name="details" className="form-control" rows="5" value={formData.details} onChange={handleChange}></textarea>
          <div className="tooltip-text">Вдячні за Ваш час! Конкретизуйте мету звернення, будь ласка.</div>
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} /> 
            Я згоден на обробку моїх персональних даних
          </label>
        </div>

        <div style={{display:'flex', gap:'10px'}}>
          <button type="submit" style={{padding:'10px 20px', background:'#001f3f', color:'white', border:'none', cursor:'pointer'}}>Відправити</button>
          <button type="button" onClick={handleClear} style={{padding:'10px 20px', background:'#ccc', border:'none', cursor:'pointer'}}>Очистити</button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
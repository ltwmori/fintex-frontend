# fintex-frontend
In this project, we tried to predict the cryptocurrency exchange rate using Sequential data, so we can get the data of the past few weeks\ months\ years and then predict the next day.
Pandas_datareader library was used to get the financial data from yahoo-finance API. 
The neural network is trained on past 60-day data and predicted the 61st day.
LSTM - Long Short Term Memory layers are reccurent layers, that memories the sequential data.
Dropout layer is used for preventing overfitting.

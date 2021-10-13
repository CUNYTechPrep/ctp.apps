#!/usr/bin/env python
# coding: utf-8

# # CUNY Tech Prep 2021 Alumni Survey

# ## Data Exploration and Visualizations
# 

# In[1]:


import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.dates as mdates
import matplotlib.pyplot as plt
from IPython.display import Image

pd.set_option('display.max_rows', 5)
plt.rcParams['figure.figsize'] = (10,10)


# ### First things first... load the data
# 

# In[2]:


df = pd.read_csv('data/data_masked.csv', sep=',')


# ### Lets look at the description and information about our dataset
# 

# In[3]:


df.columns


# In[4]:


df.isnull().sum()


# In[5]:


df.duplicated().sum()


# ### Meta/Info Columns

# In[6]:


time = df.columns[0]
under_grad = df.columns[1]
ctp_grad= df.columns[2]
describe_you = df.columns[3]
alumni_directory = df.columns[5]
tech_role_nyc = df.columns[8]
company = df.columns[10]
title = df.columns[12]
first_job = df.columns[13]
resources_needed = df.columns[20]
volunteer_opportunities = df.columns[23]

# Convert To Number
df['datetime'] =  pd.to_datetime(df[time],infer_datetime_format=True).apply(lambda x: x.value)


# # Companies / Job Info

# In[7]:


print(df.groupby(company)[company].agg(['count']).sort_values(ascending=False,by="count"))
df[company].value_counts().plot.pie()


# ## Working in New York Tech Companies

# In[8]:


condition =  df[tech_role_nyc]=="Yes"
tech_companies = df[ condition ]
print(tech_companies[company].value_counts().head(5))
tech_companies[company].value_counts().plot.pie()


#  ## Job/Company Titles 

# In[9]:


print(tech_companies[title].value_counts())
tech_companies[title].value_counts().plot.pie()


# ## The Fastest Company To Respond

# In[10]:


plt.figure(figsize=(12,12))
sns.boxplot(x='datetime',y=company, data=df)


# #  CTP Cohort And School Info

# In[11]:


print(df[ ctp_grad ].value_counts())
df[ ctp_grad ].value_counts().plot.pie()


# In[12]:


df[under_grad].value_counts().plot.pie()


# ## Fastest School/Class To Respond

# In[13]:


plt.figure(figsize=(12,12))
sns.boxplot(x='datetime',y=under_grad, data=df)


# ## Fastest Cohort To Respond

# In[14]:


plt.figure(figsize=(12,12))
sns.boxplot(x='datetime',y=ctp_grad, data=df)


# # Voluenteer Interest / Resources Needed 

# ## There are many volunteer opportunities available at CUNY Tech Prep. Check off any of the following that you'd be willing to participate in:

# In[15]:


pd.set_option('display.max_rows', None)
df.groupby([volunteer_opportunities,company])[company].agg(['count'])


# ## What resources could CUNY Tech Prep provide to best help you in your search?	

# In[16]:


df['count'] = df.groupby(volunteer_opportunities)[volunteer_opportunities].transform('count')
sns.scatterplot(data=df, x='datetime', y=volunteer_opportunities, size="count", legend=False,hue=company, sizes=(10, 1000))


# In[ ]:





# In[ ]:





# In[ ]:





# In[17]:


df.groupby([ctp_grad,resources_needed], sort=True)[ctp_grad].agg(['count'])


# In[18]:


df[ resources_needed].value_counts().plot.barh()


# # Where are CTP Alumni Now?

# In[19]:


df[describe_you].value_counts()
df[describe_you].value_counts().plot.pie()


# ## What best describes you, right now?	

# In[20]:


pd.set_option('display.max_rows', None)
df.groupby([describe_you,ctp_grad])[ctp_grad].agg(['count'])

